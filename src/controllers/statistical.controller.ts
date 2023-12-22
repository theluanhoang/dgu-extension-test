import { BAD_REQUEST, OK } from "@/core";
import { statisticalValidation } from "@/helpers";
import statisticalService from "@/services/statistical.service";
import { Request, Response } from "express";

class StatisticalController {
    statistical = async (req: Request, res: Response) => {
        const { error, value } = statisticalValidation(req.query);
        if (error) throw new BAD_REQUEST(error.details[0].message);

        new OK({
            message: "Get Statistical Successfully",
            metaData: await statisticalService.statistical(value.timeStatistical),
        }).send(res);
    };
}

export default new StatisticalController();
