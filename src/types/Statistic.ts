import { CoinOverviewType, initCoinOverview } from "./CoinOverview"

export interface StatisticType {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: string,
    total24hVolume: string,
    btcDominance: number,
    bestCoins: CoinOverviewType[],
    newestCoins: CoinOverviewType[],
}

export const initStatistic = (): StatisticType => {
    return {
        totalCoins: 0,
        totalMarkets: 0,
        totalExchanges: 0,
        totalMarketCap: "",
        total24hVolume: "",
        btcDominance: 0,
        bestCoins: initCoinOverview(),
        newestCoins: initCoinOverview()
    }
}