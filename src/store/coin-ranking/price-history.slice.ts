import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initPriceHistory, PriceHistoryType } from "../../types/PriceHistory";
import { fetchPriceHistory } from "../../services/coin-ranking/price-history.services";

interface PriceHistoryState {
    loading: boolean,
    error: string | null,
    history: PriceHistoryType[]
}

const initialState: PriceHistoryState = {
    loading: false,
    error: null,
    history: initPriceHistory()
}

const handlerPending = (state: PriceHistoryState) => {
    state.loading = true;
    state.error = null;
}

const priceHistorySlice = createSlice({
    name: "price-history",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPriceHistory.pending, handlerPending)
            .addCase(fetchPriceHistory.fulfilled, (state, action: PayloadAction<PriceHistoryType[]>) => {
                state.loading = false;
                state.history = action.payload;
            })
            .addCase(fetchPriceHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default priceHistorySlice.reducer;