import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const auth: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error("Not authorized");
  }
  const token = authorization.replace("Bearer ", "");
  const user = jwt.verify(token, process.env.JWT_SECRET);
  // @ts-ignore
  req.user = user;
  next();
};

export default auth;
