import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function errorMiddleware(
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) {
    if (error instanceof AppError) {
        return res.status(error.code).json({
            status: error.code,
            message: error.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: "INTERNAL SERVER ERROR",
    });
}

export { errorMiddleware };
