import { initNewsArticle, NewsArticleType } from "./NewsArticle";

export interface NewsResponseType {
    status: string,
    totalResults: number,
    page: number | undefined,
    articles: NewsArticleType[]
}

export const initNewsResponse = (): NewsResponseType => {
    return {
        status: "",
        totalResults: 0,
        page: 0,
        articles: initNewsArticle()
    }
}