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
    author: Author;
    images: ContentImage[];
    featureImage: ContentImage;
    tags: Tag[];
  };
}

export interface Author extends Content {
  fields: {
    name: string;
    email: string;
    articles: Article[];
    image: ContentImage;
  };
}

export interface ContentImage extends Content {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Celebrity extends Content {
  fields: {
    name: string;
    bio: object;
    images: ContentImage[];
    articles: Article[];
  };
}

export interface Tag extends Content {
  fields: {
    name: string;
  };
}
