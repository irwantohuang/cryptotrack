import { CoinType } from "./Coins"

export interface StatisticType {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: string,
    total24hVolume: string,
    btcDominance: number,
    bestCoins: CoinType | null,
    newestCoins: CoinType | null,
}

export const initStatistic = (): StatisticType => {
    return {
        totalCoins: 0,
        totalMarkets: 0,
        totalExchanges: 0,
        totalMarketCap: "",
        total24hVolume: "",
        btcDominance: 0,
        bestCoins: null,
        newestCoins: null
    }
}