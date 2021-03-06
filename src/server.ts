import express from "express";

import { errorMiddleware } from "./middlewares/errorMiddleware";
import { appRoutes } from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use(appRoutes);

app.use(errorMiddleware);

app.listen(3333, () => console.log("Server started on port 3333"));
