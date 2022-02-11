export interface Content {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Article extends Content {
  fields: {
    headline: string;
    preamble: string;
    body: object;
    author: object;
    image: object[];
    featureImage: object;
    tags: object;
  };
}
