import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi, newsCorsApi, newsCorsApiV2 } from "../../api/axios";

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


interface NewsCorsRequest {
    query: string,
    language: string,
    publisher?: string,
    from?: string,
    to?: string,
    limit: number,
    page: number
}

export const fetchNewsApiCors = createAsyncThunk("newsCors/articles", async(request: NewsCorsRequest, {rejectWithValue}) => {
    try {
        const response = await newsCorsApi.get("v2/search/articles", {
            params: request
        })
        console.log("[Fetch News Api - Cors] Response -> ", response)
        
        return response.data;
    } catch (error) {
        console.log("[Fetch News Api V1 - Cors] Error -> ", error)
        if (error === 429) {
            try {
                const response = await newsCorsApiV2.get("v2/search/articles", {
                    params: request
                })
                return response.data;
            } catch (error) {
                console.log("[Fetch News Api V2 - Cors] Error -> ", error)
                return rejectWithValue(error)
            }
        } else {
            return rejectWithValue(error)
        }
    }
})