import { BAD_REQUEST, UNAUTHORIZED } from "@/core";
import JWT from "jsonwebtoken";
import { tokenValidation, handleError } from "@/helpers";
import { Request, Response, NextFunction } from "express";
import { HEADER, NORMAL_ADMIN_ROLE, SUPER_ADMIN_ROLE } from "@/utils";
import { secretAccessToken } from "@/configs/config.auth";

export const verifyNormalAdminAuthMiddleware = handleError((req: Request, res: Response, next: NextFunction) => {
    const { error, value } = tokenValidation({ token: req.headers[HEADER.AUTHORIZATION] as string });
    if (error) throw new BAD_REQUEST(error.details[0].message);
    const accessToken = value.token;

    const decoded = JWT.verify(accessToken, secretAccessToken) as { role: string };
    if (decoded.role !== NORMAL_ADMIN_ROLE && decoded.role !== SUPER_ADMIN_ROLE) {
        throw new UNAUTHORIZED("Invalid Token");
    }

    return next();
});

export const verifySuperAdminAuthMiddleware = handleError((req: Request, res: Response, next: NextFunction) => {
    const { error, value } = tokenValidation({ token: req.headers[HEADER.AUTHORIZATION] as string });
    if (error) throw new BAD_REQUEST(error.details[0].message);
    const accessToken = value.token;

    const decoded = JWT.verify(accessToken, secretAccessToken) as { role: string };
    if (decoded?.role !== SUPER_ADMIN_ROLE) throw new UNAUTHORIZED("Invalid Token");

    return next();
});
