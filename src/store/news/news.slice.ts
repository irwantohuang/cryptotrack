import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit"
import { fetchNewsApiCors, fetchNewsEverything } from "../../services/news-api"
import { initNewsResponse, initNewsResponseTypeV2, NewsResponseType, NewsResponseTypeV2 } from '../../types/NewsResponse';

interface NewsState {
    loading: boolean,
    error: string | null,
    newsData: NewsResponseType,
    newsCorsData: NewsResponseTypeV2,
}

const initialState: NewsState = {
    loading: false,
    error: null,
    newsData: initNewsResponse(),
    newsCorsData: initNewsResponseTypeV2()
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
        builder
            .addCase(fetchNewsApiCors.pending, handlerPending)
            .addCase(fetchNewsApiCors.fulfilled, (state, action: PayloadAction<NewsResponseTypeV2>) => {
                state.loading = false;

                if (action.payload.page === 1) {
                    state.newsCorsData = action.payload;
                } else {
                    const { data, status, size, totalHits, hitsPerPage, page, totalPages, timeMs } = action.payload;
                    state.newsCorsData = {
                        data: [...state.newsCorsData.data, ...data],
                        status: status,
                        size: size,
                        totalHits: totalHits,
                        hitsPerPage: hitsPerPage,
                        page: page,
                        totalPages: totalPages,
                        timeMs: timeMs
                    }
                }

                // if (action.payload.page === 1) {
                //     state.newsData = action.payload;
                // } else {
                //     state.newsData.articles = [...state.newsData.articles, ...action.payload.articles];
                //     state.newsData.status = action.payload.status;
                //     state.newsData.totalResults = action.payload.totalResults;
                // }
            })
            .addCase(fetchNewsApiCors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default newsSlice.reducer;