export interface CoinOverviewType {
    uuid: string,
    symbol: string,
    name: string,
    iconUrl: string,
    coinrankingUrl?: string,
    price?: string
}

export const initCoinOverview = (): CoinOverviewType[] => {
    return [
        {
            uuid: "",
            symbol: "",
            name: "",
            iconUrl: "",
            coinrankingUrl: "",
            price: ""
        }
    ]
}