import express, { Router } from "express";
import { handleError } from "@/helpers";
import StatisticalController from "@/controllers/statistical.controller";
import { verifyNormalAdminAuthMiddleware } from "@/middlewares";

const router: Router = express.Router();

router.get("/statistical", verifyNormalAdminAuthMiddleware, handleError(StatisticalController.statistical));

/**
 * @swagger
 * /statistical:
 *   get:
 *     tags: [Statistical]
 *     summary: Get statistical data.
 *     security:
 *       - accessToken: []
 *     description: This API get statistical data.
 *     parameters:
 *       - in: query
 *         name: timeStatistical
 *         required: true
 *         schema:
 *           type: string
 *         description: The time frame for statistical data. Valid values are "1h", "1d", "1w", "1m", "1y".
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
 *                   example: "Get Statistical Successfully"
 *                 code:
 *                   type: integer
 *                   description: HTTP status code.
 *                   example: 200
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     revenue:
 *                       type: number
 *                       description: The total revenue.
 *                       example: 0
 *                     totalUser:
 *                       type: integer
 *                       description: The number of users.
 *                       example: 1
 */

export { router as Statistical };
