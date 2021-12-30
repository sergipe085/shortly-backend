import { Router } from "express";

import createLinkcontroller from "../modules/links/useCases/createLink";

const linkRoutes = Router();

linkRoutes.post("/", (req, res) => {
    return createLinkcontroller().handle(req, res);
});

export { linkRoutes };
