import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinRankingApi } from "../../api/axios";
import { CoinRequest } from "../../types/request/CoinRequest";

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async (request: CoinRequest, { rejectWithValue }) => {
    try {
        const response = await coinRankingApi.get("/coins", {
            params: request
        })
        console.log("[Fetch All Coins] Response... ", response)
        return response.data.data.coins;
    } catch (error) {
        console.log("[Fetch All Coins] Error ... ", error)
        return rejectWithValue(error);
    }
})