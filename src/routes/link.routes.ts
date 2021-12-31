import { Router } from "express";

import createLinkcontroller from "../modules/links/useCases/createLink";
import openLinkController from "../modules/links/useCases/openLink";

const linkRoutes = Router();

linkRoutes.post("/", (req, res) => {
    return createLinkcontroller().handle(req, res);
});

linkRoutes.get("/:code", (req, res) => {
    return openLinkController().handle(req, res);
});

export { linkRoutes };
