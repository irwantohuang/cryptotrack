import { PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "../../services/coin-ranking/search.services";
import { CoinOverviewType, initCoinOverview } from '../../types/CoinOverview';

interface SearchState {
    loading: boolean,
    error: string | null,
    searchSuggestions: CoinOverviewType[]
}

const initialState: SearchState = {
    loading: false,
    error: null,
    searchSuggestions: initCoinOverview()
}

const handlerPending = (state: SearchState) => {
    state.loading = true;
    state.error = null;
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchSearch.pending, handlerPending)
            .addCase(fetchSearch.fulfilled, (state, action: PayloadAction<CoinOverviewType[]>) => {
                state.loading = false;
                state.searchSuggestions = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})


export default searchSlice.reducer;
