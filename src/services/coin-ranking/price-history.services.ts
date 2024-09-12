import { PriceHistoryType } from './../../types/PriceHistory';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinRankingApi } from "../../api/axios";
import { SingleCoinRequest } from '../../types/request/CoinRequest';

export const fetchPriceHistory = createAsyncThunk('crypto/fetchPriceHistory', async({ uuid, request }: SingleCoinRequest, { rejectWithValue }) => {
    try {
        const response = await coinRankingApi.get(`/coin/${uuid}/history`, {
            params: request
        })
        let history = response.data.data.history.reverse();
        history = history.filter((e: PriceHistoryType) => e.price !== null);
        history = mapHistory(history, request.timePeriod);

        return history;
    } catch (error) {
        console.log("[Fetch Price History] Error -> ", error);
        return rejectWithValue(error);
    }
})

const mapHistory = (history: PriceHistoryType[], timePeriod: string) => {
    switch(timePeriod) {
        case "30d": return aggregatedDataPeriod(history, 8);
        case "7d": return aggregatedDataPeriod(history, 8);
        case "3m": return aggregatedDataPeriod(history, 3)
        default: return history;
    }
}


const aggregatedDataPeriod = (chart: PriceHistoryType[], hoursPerPeriod: number) => {
    const aggregatedData = [];

    for (let i = 0; i < chart.length; i+= hoursPerPeriod) {
        const periodData = chart.slice(i, i + hoursPerPeriod);
        const avgPrice = periodData.reduce((sum, item) => sum + parseFloat(item.price), 0) / periodData.length;

        const timestamp = periodData[0].timestamp;
        aggregatedData.push({ price: avgPrice, timestamp});
    }

    return aggregatedData;
}