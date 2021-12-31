import { Request, Response } from "express";

import { OpenLinkUseCase } from "./OpenLinkUseCase";

class OpenLinkController {
    constructor(private openLinkUseCase: OpenLinkUseCase) {}

    handle(req: Request, res: Response): Response {
        const { code } = req.params;
        const link = this.openLinkUseCase.execute({ code });
        return res.json(link);
    }
}

export { OpenLinkController };
