import { RequestHandler } from "express";
import { db } from "../db/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const get: RequestHandler = async (req, res, next) => {
  try {
    const querySnapshot = await db
      .collection("users")
      //@ts-ignore
      .doc(req.user.email)
      .get();
    res.json({ users: querySnapshot.data() });
  } catch (error) {
    res.json({ error });
  }
};

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, password, account } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userId = uuidv4();
    const userRef = db.collection("users");
    const userSnapshot = await userRef.doc(email).get();

    if (userSnapshot.data()) {
      res.json({ message: "Email already exists" });
    } else {
      const response = await userRef.doc(email).set({
        id: userId,
        name: name,
        email: email,
        password: hashedPassword,
        tags: [],
        articles: [],
        account: account,
      });
      console.log(response);

      res.json({ message: "User successfully created!" });
    }
  } catch (error) {
    res.json({ error });
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userRef = db.collection("users");
    const snapshot = await userRef.doc(email).get();
    const user = snapshot.data();
    console.log(user);

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token, user });
    }
  } catch (error) {
    res.json({ error });
  }
};

export const update: RequestHandler = async (req, res, next) => {
  if (req.body.email) {
    const userSnapshot = await db.collection("users").doc(req.body.email).get();
    if (userSnapshot.data()) {
      res.json({ message: "Email already exists" });
      return;
    }
  }
  try {
    //@ts-ignore
    await db.collection("users").doc(req.user.id).update(req.body);
    res.json({ message: "User updated" });
  } catch (error) {
    next(error);
  }
};

export const remove: RequestHandler = async (req, res, next) => {
  try {
    //@ts-ignore
    await db.collection("users").doc(req.user.id).delete();
    res.json({ message: "User successfully deleted" });
  } catch (error) {
    next(error);
  }
};
