/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit';
import { CoinType, initCoin } from './../../types/Coins';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCoins } from '../../services/coin-ranking/coins.services';
import { BEST_COIN, TOP_COIN } from '../../constants/constant';

interface CoinState {
    loading: boolean,
    error: string | null,
    topCoins: CoinType[],
    bestCoins: CoinType[]
}

const initialState: CoinState = {
    loading: false,
    error: null,
    topCoins: initCoin(),
    bestCoins: initCoin()
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
            .addCase(fetchCoins.fulfilled, (state, action: PayloadAction<{ type: string, data: CoinType[]}>) => {
                state.loading = false;
                switch (action.payload.type) {
                    case TOP_COIN: 
                        state.topCoins = action.payload.data; break;
                    case BEST_COIN: 
                        state.bestCoins = action.payload.data; break;
                }
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default coinSlice.reducer;