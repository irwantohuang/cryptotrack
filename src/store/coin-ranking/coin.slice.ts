/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit';
import { CoinPagination } from './../../types/CoinPagination';
import { CoinType, initCoin } from './../../types/Coins';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCoin, fetchCoins } from '../../services/coin-ranking/coins.services';
import { ALL_COINS, BEST_COIN, NEW_COIN, TOP_COIN } from '../../constants/constant';
import { initCoinPagination } from '../../types/CoinPagination';
import { CoinDetailType, initCoinDetailType } from '../../types/CoinDetailType';

interface CoinState {
    loading: boolean,
    error: string | null,
    topCoins: CoinType[],
    bestCoins: CoinType[],
    newCoins: CoinType[],
    allCoins: CoinPagination,
    coinDetail: CoinDetailType,
}

const initialState: CoinState = {
    loading: false,
    error: null,
    topCoins: initCoin(),
    bestCoins: initCoin(),
    newCoins: initCoin(),
    allCoins: initCoinPagination(),
    coinDetail: initCoinDetailType()
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
            .addCase(fetchCoins.fulfilled, (state, action: PayloadAction<{ type: string, data: CoinType[], totalResults?: number, offset?: number }>) => {

                console.log("data ", action.payload)

                state.loading = false;
                switch (action.payload.type) {
                    case TOP_COIN:
                        state.topCoins = action.payload.data; break;
                    case BEST_COIN:
                        state.bestCoins = action.payload.data; break;
                    case NEW_COIN:
                        state.newCoins = action.payload.data; break;
                    case ALL_COINS:
                        state.allCoins.totalResults = action.payload?.totalResults;
                        if (action.payload.offset === 0) {
                            state.allCoins.coins = action.payload.data;
                        } else {
                            state.allCoins.coins = [...state.allCoins.coins, ...action.payload.data]
                        }
                }
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        builder
            .addCase(fetchCoin.pending, handlerPending)
            .addCase(fetchCoin.fulfilled, (state, action: PayloadAction<CoinDetailType>) => {
                state.loading = false;
                state.coinDetail = action.payload;
            })
    }
})

export default coinSlice.reducer;