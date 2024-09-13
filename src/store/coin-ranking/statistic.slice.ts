import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initStatistic, StatisticType } from "../../types/Statistic";
import { fetchStatistic } from "../../services/coin-ranking"; 


interface StatisticState {
    loading: boolean,
    error: string | null,
    statistic: StatisticType
}

const initialState: StatisticState = {
    loading: false,
    error: null,
    statistic: initStatistic()
}

const handlerPending = (state: StatisticState) => {
    state.loading = true;
    state.error = null;
}

const statisticSlice = createSlice({
    name: "statistic",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStatistic.pending, handlerPending)
            .addCase(fetchStatistic.fulfilled, (state, action: PayloadAction<StatisticType>) => {
                state.loading = false;
                state.statistic = action.payload;
            })
            .addCase(fetchStatistic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default statisticSlice.reducer;