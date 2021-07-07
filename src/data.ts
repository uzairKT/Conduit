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
    tagList: Array<any>;
    description: string;
    author: Author;
    favorited: boolean;
    favoritesCount: number;
}