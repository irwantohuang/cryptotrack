import { createAsyncThunk } from "@reduxjs/toolkit"
import { coinRankingApi } from "../../api/axios"

interface SearchRequestType {
    referenceCurrencyUuid?: string,
    query?: string
}

export const fetchSearch = createAsyncThunk("crypto/fetchSearch", async(request: SearchRequestType, { rejectWithValue }) => {
    try {
        const response = await coinRankingApi.get("/search-suggestions", {
            params: request
        })
        console.log("response here...", response)
        return response.data.data.coins;
    } catch (error) {
        console.log("Error here... ", error)
    return rejectWithValue(error);
    }
})