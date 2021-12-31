import { Request, Response } from "express";

import { OpenLinkUseCase } from "./OpenLinkUseCase";

class OpenLinkController {
    constructor(private openLinkUseCase: OpenLinkUseCase) {}

    handle(req: Request, res: Response): Response {
        const { code } = req.params;
        const link = this.openLinkUseCase.execute({ code });
        res.redirect(link.targetLink);
        return res.json();
    }
}

export { OpenLinkController };
