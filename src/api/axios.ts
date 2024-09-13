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
        console.log('Axios interceptors error ...' , error)
        if (error) {
            throw error?.response?.data?.message || error?.message
        }
    }
)

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
export const newsApi = axios.create({
    baseURL: proxyUrl + import.meta.env.VITE_NEWS_BASE_URL,
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