import { db, setDoc, addDoc } from "../db/client";
import { Router } from "express";
import bcrypt from "bcryptjs";

const userrouter = Router();

userrouter.get("/", async (req, res, next) => {
  try {
    const querySnapshot = await db.collection("users").get();
    console.log(querySnapshot.docs);
    res.json({ users: querySnapshot.docs });
  } catch (error) {
    res.json({ error });
  }
});

userrouter.post("/newUser", async (req, res, next) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    await db.collection("users").add({
      name: name,
      email: email,
      password: hashedPassword,
      tags: [],
      articles: [],
      account: {},
    });
    res.json({ message: "User successfully created!" });
  } catch (error) {
    res.json({ error });
  }
});

userrouter.post("/auth", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // const user = await db.collection("users").getDoc({ email: email });
    const userRef = db.collection("users");
    const snapshot = await userRef.where("email", "==", email).get();
    res.json({ user: snapshot.docs });
  } catch (error) {
    res.json({ error });
  }
});

export default userrouter;
