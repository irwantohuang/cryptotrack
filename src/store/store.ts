import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import { coinReducer, statisticReducer } from "./coin-ranking";
import newsReducer from './news/news.slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        coin: coinReducer,
        statistic: statisticReducer,
        news: newsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;