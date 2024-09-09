import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinRankingApi } from "../../api/axios";
import { CoinRequest } from "../../types/request/CoinRequest";
import { ALL_COINS } from "../../constants/constant";

interface FetchCoinRequestType {
    type: string,
    request: CoinRequest
}

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async ({type, request}: FetchCoinRequestType, { rejectWithValue }) => {

    console.log("Request Here ... -> ", request)

    try {
        const response = await coinRankingApi.get("/coins", {
            params: request
        })

        const data = response.data.data.coins;
        const totalResults = response.data.data.stats.total;

        if (type === ALL_COINS) {
            return {
                type: type,
                totalResults: totalResults,
                data: data,
                offset: request.offset
            }
        } else {
            return {
                type: type,
                data: data
            }
        }
        
        // return {
        //     type: type,
        //     data: response.data.data.coins
        // }
    } catch (error) {
        console.log("[Fetch All Coins] Error ... ", error)
        return rejectWithValue(error);
    }
})