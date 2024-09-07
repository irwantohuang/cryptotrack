import { initNewsArticle, NewsArticleType } from "./NewsArticle";

export interface NewsResponseType {
    status: string,
    totalResults: number,
    articles: NewsArticleType[]
}

export const initNewsResponse = (): NewsResponseType => {
    return {
        status: "",
        totalResults: 0,
        articles: initNewsArticle()
    }
}