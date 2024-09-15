import { initNewsArticle, initNewsArticleV2, NewsArticleType, NewsArticleTypeV2 } from "./NewsArticle";

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


// News API - Support CORS
export interface NewsResponseTypeV2 {
    status: boolean | string,
    data: NewsArticleTypeV2[],
    size: number,
    totalHits: number,
    hitsPerPage: number,
    page: number,
    totalPages: number,
    timeMs: number
}

export const initNewsResponseTypeV2 = (): NewsResponseTypeV2 => {
    return {
        status: false,
        data: initNewsArticleV2(),
        size: 0,
        totalHits: 0,
        hitsPerPage: 0,
        page: 0,
        totalPages: 0,
        timeMs: 0
    }
}