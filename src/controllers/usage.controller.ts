import { Response, Request } from "express";
import { OK } from "@/core";
import UsageService from "@/services/usage.service";
import { analysisUserAgent } from "@/utils";

class UsageController {
    createApiKey = async (req: Request, res: Response) => {
        req.body.device = analysisUserAgent(req.headers["user-agent"] || "");

        new OK({
            message: "Create API Key Successfully",
            metaData: await UsageService.createApiKey(req.body),
        }).send(res);
    };

    getApiKey = async (req: Request, res: Response) => {
        new OK({
            message: "Get All API Key Successfully",
            metaData: await UsageService.getApiKey(req.body),
        }).send(res);
    };

    deleteApiKey = async (req: Request, res: Response) => {
        new OK({
            message: "Delete API Key Successfully",
            metaData: await UsageService.deleteApiKey(req.body),
        }).send(res);
    };

    getCash = async (req: Request, res: Response) => {
        new OK({
            message: "Get Cash By User Successfully",
            metaData: await UsageService.getCash(req.body),
        }).send(res);
    };
}

export default new UsageController();
