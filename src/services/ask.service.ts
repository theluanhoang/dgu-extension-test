import { IRequestAsk, IUsageModel } from "@/types";
import { configOpenai } from "@/configs/config.openai";
import { UsageModel } from "@/models";
import { PRICE_PER_REQUEST } from "@/utils";
import { BAD_REQUEST, FORBIDDEN } from "@/core";
const MAX_TOKENS = 3000;
const PRICE_INPUT_1K_PROMPT = 0.01;
const PRICE_OUTPUT_1K_PROMPT = 0.03;
const EXCHANGE_RACE_VND = 24000;

class AskService {
    createAsk = async ({ imageUrl, apiKey, userId }: IRequestAsk) => {
        const { apiKeys } = ((await UsageModel.findOne({ userId }).select(["apiKeys"])) as IUsageModel) || {};

        if (!apiKeys) throw new BAD_REQUEST("API Key Not Found", 995);

        const apiKeyMatch = apiKeys.some((apiKeyRecord) => apiKeyRecord.apiKey === apiKey);
        if (!apiKeyMatch) throw new BAD_REQUEST("API Key Not Match", 994);

        const { modifiedCount } =
            (await UsageModel.updateOne(
                { userId, cash: { $gte: PRICE_PER_REQUEST } },
                { $inc: { cash: -PRICE_PER_REQUEST } },
            )) || {};

        if (modifiedCount === 0) throw new FORBIDDEN("Credit Is Not Enough", 993);

        const extractionPrompt = `Return to me the content of the multiple-choice question in
        this image. Only return the question and the answers.`;
        const contentResponse = await configOpenai.chat.completions.create({
            model: "gpt-4-vision-preview",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: extractionPrompt },
                        { type: "image_url", image_url: { url: imageUrl, detail: "low" } },
                    ],
                },
            ],
            max_tokens: MAX_TOKENS,
        });

        const answerPrompt = `Based on the quiz question data, return to me the most accurate answer in this dataset: ${contentResponse.choices[0].message.content}`;

        const answerResponse = await configOpenai.chat.completions.create({
            model: "gpt-4-1106-preview",
            messages: [
                {
                    role: "user",
                    content: [{ type: "text", text: answerPrompt }],
                },
            ],
            max_tokens: MAX_TOKENS,
        });

        const { promptTokens, completionTokens, totalCostUSD, totalCostVND } = this.calculateTokenCost(
            contentResponse,
            answerResponse,
        );

        return {
            result: answerResponse.choices[0].message.content,
            tokens: {
                promptTokens,
                completionTokens,
            },
            costs: {
                totalCostVND,
                totalCostUSD,
            },
        };
    };

    calculateTokenCost = (contentResponse: any, answerResponse: any) => {
        const costPerPromptToken = PRICE_INPUT_1K_PROMPT / 1000;
        const costPerCompletionToken = PRICE_OUTPUT_1K_PROMPT / 1000;

        const promptTokens = (contentResponse.usage?.prompt_tokens ?? 0) + (answerResponse.usage?.prompt_tokens ?? 0);
        const completionTokens =
            (contentResponse.usage?.completion_tokens ?? 0) + (answerResponse.usage?.completion_tokens ?? 0);

        const totalCostUSD = promptTokens * costPerPromptToken + completionTokens * costPerCompletionToken;
        const totalCostVND = totalCostUSD * EXCHANGE_RACE_VND;

        return {
            promptTokens,
            completionTokens,
            totalCostUSD,
            totalCostVND,
        };
    };
}

export default new AskService();
