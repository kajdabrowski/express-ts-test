import { RequestHandler } from "express";
import { db } from "../db/client";
import { v4 as uuidv4 } from "uuid";
import { client } from "../contentful/contentfulClient";
import { Article } from "../contentful/models";

export const getArticles: RequestHandler = async (req, res, next) => {
  try {
    const entries: { items: Article[] } = await client.getEntries({
      content_type: "article",
    });
    console.log(entries.items[0].sys);
    res.json({ content: entries.items });
  } catch (error) {}
};
