import axios from "axios";

export const coinRankingApi = axios.create({
    baseURL: import.meta.env.VITE_COINRANKING_BASE_URL,
    headers: {
        'x-rapidapi-host': import.meta.env.VITE_COINRANKING_HOST,
        'x-rapidapi-key': import.meta.env.VITE_COINRANKING_API_KEY
    }
})

coinRankingApi.interceptors.response.use(
    response => response,
    error => {
        console.log('[Coin Ranking] Axios interceptors error ...' , error)
        if (error) {
            throw error?.response?.data?.message || error?.message
        }
    }
)

export const newsApi = axios.create({
    baseURL: import.meta.env.VITE_NEWS_BASE_URL,
    headers: {
        'Authorization': import.meta.env.VITE_NEWS_API_KEY,
        'X-Api-Key': import.meta.env.VITE_NEWS_API_KEY,
    }
})

newsApi.interceptors.response.use(
    response => response,
    error => {
        console.log('Axios interceptors error ...' , error)
        if (error) {
            throw error?.response?.data?.message
        }
    }
)

export const newsCorsApi = axios.create({
    baseURL: import.meta.env.VITE_NEWS_CORS_API_URL,
    headers: {
        'X-Rapidapi-Key': import.meta.env.VITE_NEWS_CORS_API_KEY,
        'X-Rapidapi-Host': import.meta.env.VITE_NEWS_CORS_HOST
    }
})


newsCorsApi.interceptors.response.use(
    response => response,
    error => {
        console.log('[News Api - CORS] Axios interceptors error ...' , error)
        if (error) {
            if (error?.response?.status === 429) {
                throw 429;
            } else throw error?.response?.data?.message || error?.message
        }
    }
)

export const newsCorsApiV2 = axios.create({
    baseURL: import.meta.env.VITE_NEWS_CORS_API_URL,
    headers: {
        'X-Rapidapi-Key': import.meta.env.VITE_NEWS_CORS_API_KEY2,
        'X-Rapidapi-Host': import.meta.env.VITE_NEWS_CORS_HOST
    }
})


newsCorsApiV2.interceptors.response.use(
    response => response,
    error => {
        console.log('[News Api - CORS] Axios interceptors error ...' , error)
        if (error) {
            if (error?.response?.status === 429) {
                throw "Sorry, we've reached our daily API limit. please check back tommorow"
            } else throw error?.response?.data?.message || error?.message
        }
    }
)