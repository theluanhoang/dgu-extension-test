import WebhookController from "@/controllers/webhook.controller";
import { handleError } from "@/helpers";
import { verifySecureTokenMiddleware } from "@/middlewares";
import express, { Router } from "express";

const router: Router = express.Router();

router.post(
    "/webhooks/handler-bank-transfer",
    verifySecureTokenMiddleware,
    handleError(WebhookController.handleBankTransfer),
);

// NOTE: ROUTER TEST NOTIFICATION
router.get("/webhooks", handleError(WebhookController.handleNotification));

export { router as Webhook };
