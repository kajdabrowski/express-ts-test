import { Router } from "express";
import auth from "../middlewares/auth";
import * as contentController from "../controllers/contentControllers";

const contentRouter = Router();

contentRouter.get("/articles", auth, contentController.getArticles);

export default contentRouter;
