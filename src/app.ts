import * as dotenv from "dotenv";
dotenv.config();
import { User, Account, AccountType } from "./db/models";
import express, { RequestHandler } from "express";
import userrouter from "./routes/userroutes";

const app = express();
app.use(express.json());
app.use(userrouter);
const port = 3000;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});

const getUsers: RequestHandler = (req, res, next) => {
  let users: User[] = [
    {
      id: "1",
      name: "Romina",
      email: "romina@iths.se",
      password: "grillkorv",
      tags: ["1", "2", "3"],
      favorites: ["fav1", "fav2"],
      articles: ["article1", "article2"],
      account: {
        payment: "card",
        type: AccountType.basic,
        freeMonthExpires: new Date(),
        notifications: true,
      },
    },
    {
      id: "2",
      name: "Pelle",
      email: "pelle@iths.se",
      password: "grillkorv",
      tags: ["1", "2", "3"],
      favorites: ["fav1", "fav2", "fav3"],
      articles: ["article1", "article2", "article3"],
      account: {
        payment: "card",
        type: AccountType.family,
        freeMonthExpires: new Date(),
        notifications: false,
      },
    },
    {
      id: "3",
      name: "Azeb",
      email: "azeb@iths.se",
      password: "grillkorv",
      tags: ["1", "2", "3"],
      favorites: ["fav1", "fav2", "fav3", "fav4"],
      articles: ["article1", "article2", "article3", "article4"],
      account: {
        payment: "card",
        type: AccountType.basic,
        freeMonthExpires: new Date(),
        notifications: true,
      },
    },
    {
      id: "4",
      name: "Kaj",
      email: "kaj@iths.se",
      password: "grillkorv",
      tags: ["1", "2", "3"],
      favorites: ["fav1", "fav2", "fav3"],
      articles: ["article1", "article2"],
      account: {
        payment: "card",
        type: AccountType.basic,
        freeMonthExpires: new Date(),
        notifications: false,
      },
    },
  ];

  res.status(200).json(users);
};

app.get("/users", getUsers);
