import { Request, Response } from "express";

import { CreateLinkUseCase } from "./CreateLinkUseCase";

class CreateLinkController {
    constructor(private createLinkUseCase: CreateLinkUseCase) {}

    handle(req: Request, res: Response): Response {
        const { targetLink, code } = req.body;

        const newlink = this.createLinkUseCase.execute({ targetLink, code });

        return res.json(newlink);
    }
}

export { CreateLinkController };
