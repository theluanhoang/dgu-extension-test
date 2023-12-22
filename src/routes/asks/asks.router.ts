import express, { Router } from "express";
import { handleError } from "@/helpers";
import AskController from "@/controllers/asks.controller";
import { verifyApiKeyMiddleware } from "@/middlewares";

const router: Router = express.Router();

router.post("/asks", verifyApiKeyMiddleware, handleError(AskController.createAsk));
/**
 * @swagger
 * /asks:
 *   post:
 *     tags: [Ask]
 *     summary: Create ask
 *     security:
 *       - apiKey: []
 *     description: This API creates an ask.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - imageUrl
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: Base 64 image URL
 *     responses:
 *       200:
 *         description: The result is correct.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Result message.
 *                 code:
 *                   type: integer
 *                   description: HTTP status code.
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     result:
 *                       type: string
 *                       description: Detailed result or message from the request.
 *                     tokens:
 *                       type: object
 *                       properties:
 *                         promptTokens:
 *                           type: integer
 *                           description: Number of tokens used for the prompt.
 *                         completionTokens:
 *                           type: integer
 *                           description: Number of tokens used for the completion.
 *                     costs:
 *                       type: object
 *                       properties:
 *                         totalCostVND:
 *                           type: number
 *                           format: double
 *                           description: Total cost in VND.
 *                         totalCostUSD:
 *                           type: number
 *                           format: double
 *                           description: Total cost in USD.
 *       404:
 *         description: Authentication Errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Error"
 *                 message:
 *                   type: string
 *                 code:
 *                   type: integer
 *                   example: 994
 *             examples:
 *               apiKeyNotFound:
 *                 summary: API Key Not Found
 *                 value:
 *                   status: "Error"
 *                   message: "API Key Not Found"
 *                   code: 995
 *               apiKeyNotMatch:
 *                 summary: API Key Not Match
 *                 value:
 *                   status: "Error"
 *                   message: "API Key Not Match"
 *                   code: 994
 *       403:
 *         description: Credit Is Not Enough.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "Error"
 *                 message:
 *                   type: string
 *                   example: "Credit Is Not Enough"
 *                 code:
 *                   type: integer
 *                   example: 993
 */

export { router as Ask };
