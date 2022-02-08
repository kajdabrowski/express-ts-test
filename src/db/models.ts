export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Rätt typ? Använda bcrypt kanske?
  tags: string[];
  favorites: string[];
  articles: string[];
  account: Account;
}

export enum AccountType {
  basic = "basic",
  family = "family",
}

export interface Account {
  payment: string;
  type: AccountType;
  freeMonthExpires: Date;
  notifications: boolean;
}

export interface Comments {
  authorId: string;
  articleId: string;
  commentText: string;
}
