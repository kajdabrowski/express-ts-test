import { Hash } from "crypto";
import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});

interface User {
  id: string;
  name: string;
  email: string;
  password?: Hash; // Rätt typ? Använda bcrypt kanske?
  tags: Number[];
  favorites: string[];
  articles: string[];
  account: string;
}

const getUsers = (request: Request, response: Response, next: NextFunction) => {
  let users: User[] = [
    {
      id: "1",
      name: "Romina",
      email: "romina@iths.se",
      tags: [1, 2, 3],
      favorites: ["fav1", "fav2"],
      articles: ["article1", "article2"],
      account: "basic",
    },
    {
      id: "2",
      name: "Pelle",
      email: "pelle@iths.se",
      tags: [1, 2, 3, 4, 5, 6],
      favorites: ["fav1", "fav2", "fav3"],
      articles: ["article1", "article2", "article3"],
      account: "family",
    },
    {
      id: "3",
      name: "Azeb",
      email: "azeb@iths.se",
      tags: [1, 2, 3, 4],
      favorites: ["fav1", "fav2", "fav3", "fav4"],
      articles: ["article1", "article2", "article3", "article4"],
      account: "family",
    },
    {
      id: "4",
      name: "Kaj",
      email: "kaj@iths.se",
      tags: [1, 2, 3, 4, 5, 6],
      favorites: ["fav1", "fav2", "fav3"],
      articles: ["article1", "article2"],
      account: "basic",
    },
  ];

  response.status(200).json(users);
};

app.get("/users", getUsers);
