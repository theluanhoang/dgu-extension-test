import { FORBIDDEN, UNPROCESSABLE_ENTITY } from "@/core";
import { createApiKey } from "@/helpers";
import { UsageModel } from "@/models";
import { IRequestCreateApiKey, IRequestDeleteApiKey, IRequestGetApiKey, IUsageModel } from "@/types";

class UsageService {
    createApiKey = async ({ userId, device }: IRequestCreateApiKey) => {
        const { apiKey, timestamp } = createApiKey(userId);

        const createApiKeyResponse = (await UsageModel.findOneAndUpdate(
            { userId },
            {
                $push: {
                    apiKeys: {
                        timestamp,
                        apiKey,
                        device,
                    },
                },
            },
            { upsert: true, new: true },
        )) as IUsageModel;

        if (!createApiKeyResponse) throw new UNPROCESSABLE_ENTITY("Create API Key Failed");

        return { apiKey, timestamp, device };
    };

    getApiKey = async ({ userId }: IRequestGetApiKey) => {
        const { apiKeys } = ((await UsageModel.findOne({ userId }).select(["apiKeys"])) as IUsageModel) || {};
        if (!apiKeys) throw new FORBIDDEN("You don't have any API Key");

        const infoApiKey = apiKeys.map((apiKeyItem: { timestamp: string; apiKey: string; device: string }) => {
            return {
                timestamp: apiKeyItem.timestamp,
                device: apiKeyItem.device,
            };
        });

        return { infoApiKey };
    };

    deleteApiKey = async ({ userId, timestamp }: IRequestDeleteApiKey) => {
        const updateResult = (await UsageModel.findOneAndUpdate(
            { userId },
            { $pull: { apiKeys: { timestamp } } },
            { new: true },
        )) as IUsageModel;

        if (!updateResult) throw new UNPROCESSABLE_ENTITY("Delete API Key Failed");

        return { deleteApiKey: true, userId, timestamp };
    };

    getCash = async ({ userId }: IRequestGetApiKey) => {
        const { cash } = ((await UsageModel.findOne({ userId }).select(["cash"])) as IUsageModel) || {};

        if (cash === undefined) throw new FORBIDDEN("You don't have any cash");

        return { cash };
    };
}

export default new UsageService();
