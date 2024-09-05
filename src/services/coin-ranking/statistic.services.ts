import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinRankingApi } from "../../api/axios";


export const fetchStatistic = createAsyncThunk("crypto/statistics", async(_, { rejectWithValue }) => {
    try {
        const response = await coinRankingApi.get("/stats")
        console.log("response here... ", response)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error);
    }
})