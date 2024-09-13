import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi } from "../../api/axios";

interface FetchNewsRequest {
    q: string,
    searchIn?: string,
    sources?: string | string[],
    domains?: string,
    excludeDomains?: string,
    from?: Date,
    to?: Date,
    language?: string,
    sortBy?: string,
    pageSize?: number,
    page?: number,
}

export const fetchNewsEverything = createAsyncThunk("news/everything", async(request: FetchNewsRequest, { rejectWithValue }) => {
    try {
        console.log("Request here... ", request)
        const response = await newsApi.get("/everything", {
            params: request
        })
        console.log("Response here News ..." , response)
        return {
            page: request.page,
            totalResults: response.data.totalResults,
            status: response.data.status,
            articles: response.data.articles
        }
        // return response.data;
    } catch (error) {
        console.log("[Fetch All Coins] Error ... ", error)
        return rejectWithValue(error);
    }
})