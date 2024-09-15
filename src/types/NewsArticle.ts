export interface NewsArticleType {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string | null,
        name: string,
    },
    title: string,
    url: string,
    urlToImage: string
}

export const initNewsArticle = (): NewsArticleType[] => {
    return [
        {
            author: '',
            content: '',
            description: '',
            publishedAt: '',
            source: {
                id: '',
                name: '',
            },
            title: '',
            url: '',
            urlToImage: ''
        }
    ]
}



// News API - Support Cors

export interface NewsArticleTypeV2 {
    title: string,
    url: string,
    excerpt: string,
    thumbnail: string,
    language: string,
    paywall: string,
    contentLength: number,
    date: string,
    authors: string[],
    keywords: string[],
    publisher: {
        name: string,
        url: string,
        favicon: string
    }
}

export const initNewsArticleV2 = (): NewsArticleTypeV2[] => {
    return [
        {
            title: '',
            url: '',
            excerpt: '',
            thumbnail: '',
            language: '',
            paywall: '',
            contentLength: 0,
            date: '',
            authors: [],
            keywords: [],
            publisher: {
                name: '',
                url: '',
                favicon: ''
            }
        }
    ]
}