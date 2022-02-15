import { RequestHandler } from "express";
import { db } from "../db/client";
import { v4 as uuidv4 } from "uuid";
import { client } from "../contentful/contentfulClient";
import { Article } from "../contentful/models";

export const getArticles: RequestHandler = async (req, res, next) => {
  console.log("IN CONTROLLER");

  try {
    const entries: { items: Article[] } = await client.getEntries({
      content_type: "article",
    });
    // console.log(entries.items[0].sys);
    console.log(entries.items);
    // const articles = entries.items;
    res.json(entries.items);
  } catch (error) {}
};
