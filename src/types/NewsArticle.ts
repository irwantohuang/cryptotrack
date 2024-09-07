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