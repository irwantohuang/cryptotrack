export interface CoinOverviewType {
    uuid: string,
    symbol: string,
    name: string,
    iconUrl: string,
    coinrankingUrl: string,
}

export const initCoinOverview = (): CoinOverviewType[] => {
    return [
        {
            uuid: "",
            symbol: "",
            name: "",
            iconUrl: "",
            coinrankingUrl: "",
        }
    ]
}