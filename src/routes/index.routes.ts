import { Router } from "express";

import { linkRoutes } from "./link.routes";

const routes = Router();

routes.use("/link", linkRoutes);

export { routes as appRoutes };
