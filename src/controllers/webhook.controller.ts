import { OK } from "@/core";
import socketService from "@/services/socket.service";
import WebhooksService from "@/services/webhooks.service";
import { Request, Response } from "express";

class WebhookController {
    handleBankTransfer = async (req: Request, res: Response) => {
        new OK({
            message: "Handle Bank Transfer Successfully",
            metaData: await WebhooksService.handleBankTransfer(req.body.data),
        }).send(res);
    };

    // NOTE: SERVICE TEST NOTIFICTION
    handleNotification = async (req: Request, res: Response) => {
        await socketService.handleNotificationPaymentStatus("12345", {
            result: true,
            amount: 5000,
        });
        new OK({
            message: "Handle Bank Transfer Successfully",
            metaData: "DONE",
        }).send(res);
    };
}

export default new WebhookController();
