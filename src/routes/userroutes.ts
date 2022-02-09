import { Router } from "express";
import auth from "../middlewares/auth";
import * as userController from "../controllers/userControllers";

const userrouter = Router();

userrouter.post("/register", userController.register);

userrouter.post("/login", userController.login);

userrouter.get("/", auth, userController.getAll);

export default userrouter;
