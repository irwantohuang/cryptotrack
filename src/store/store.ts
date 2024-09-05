import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import { coinReducer, statisticReducer } from "./coin-ranking";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        coin: coinReducer,
        statistic: statisticReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;