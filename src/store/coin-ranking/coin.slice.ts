/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit';
import { initCoin } from './../../types/Coins';
import { Coins } from "../../types/Coins";
import { createSlice } from '@reduxjs/toolkit';
import { fetchCoins } from '../../services/coin-ranking/coins.services';

interface CoinState {
    loading: boolean,
    error: string | null,
    topCoins: Coins[]
}

const initialState: CoinState = {
    loading: false,
    error: null,
    topCoins: initCoin()
}

const handlerPending = (state: CoinState) => {
    state.loading = true;
    state.error = null;
}

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, handlerPending)
            .addCase(fetchCoins.fulfilled, (state, action: PayloadAction<Coins[]>) => {
                state.loading = false;
                state.topCoins = action.payload;
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default coinSlice.reducer;