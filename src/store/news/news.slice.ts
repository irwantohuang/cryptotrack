import { PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit"
import { fetchNewsEverything } from "../../services/news-api/index.services"
import { initNewsResponse, NewsResponseType } from '../../types/NewsResponse';


interface NewsState {
    loading: boolean,
    error: string | null,
    newsData: NewsResponseType,
}

const initialState: NewsState = {
    loading: false,
    error: null,
    newsData: initNewsResponse(),
}

const handlerPending = (state: NewsState) => {
    state.loading = true;
    state.error = null;
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsEverything.pending, handlerPending)
            .addCase(fetchNewsEverything.fulfilled, (state, action: PayloadAction<NewsResponseType>) => {
                state.loading = false;
                console.log("Action -> ", action.payload)

                if (action.payload.page === 1) {
                    state.newsData = action.payload;
                } else {
                    state.newsData.articles = [...state.newsData.articles, ...action.payload.articles];
                    state.newsData.status = action.payload.status;
                    state.newsData.totalResults = action.payload.totalResults;
                }
            })
            .addCase(fetchNewsEverything.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default newsSlice.reducer;