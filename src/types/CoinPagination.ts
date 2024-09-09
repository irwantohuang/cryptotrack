import { CoinType, initCoin } from "./Coins";

export interface CoinPagination {
    totalResults: number | undefined,
    coins: CoinType[]
}

export const initCoinPagination = (): CoinPagination => {
    return {
        totalResults: 0,
        coins: initCoin()
    }
}