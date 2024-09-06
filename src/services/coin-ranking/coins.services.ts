import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinRankingApi } from "../../api/axios";
import { CoinRequest } from "../../types/request/CoinRequest";

interface FetchCoinRequestType {
    type: string,
    request: CoinRequest
}

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async ({type, request}: FetchCoinRequestType, { rejectWithValue }) => {
    try {
        const response = await coinRankingApi.get("/coins", {
            params: request
        })
        
        return {
            type: type,
            data: response.data.data.coins
        }
    } catch (error) {
        console.log("[Fetch All Coins] Error ... ", error)
        return rejectWithValue(error);
    }
})