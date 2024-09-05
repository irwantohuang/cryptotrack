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
            throw error?.response?.data?.message
        }
        // if (error) {
            // switch (error?.response?.status) {
                // 
            // }
        // }
    }
)