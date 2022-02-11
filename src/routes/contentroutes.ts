import { Router } from "express";
import { getArticles } from "../controllers/contentControllers";
import auth from "../middlewares/auth";
import * as contentController from "../controllers/contentControllers";

const contentRouter = Router();

contentRouter.get("/articles", contentController.getArticles);

export default contentRouter;
