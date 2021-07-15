export interface Author {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}

export interface JsonData {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<string>;
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export interface user {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: null;
}

export interface userResponse {
  user: user;
}
