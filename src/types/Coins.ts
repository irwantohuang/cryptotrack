export interface CoinType {
    uuid: string,
    symbol: string,
    name: string,
    color: string,
    iconUrl: string,
    marketCap: string,
    price: string,
    btcPrice: string,
    listedAt: number,
    change: string,
    lowVolume: boolean,
    tier: number,
    rank: string | number,
    sparkline: string[],
    coinrankingUrl: string,
    '24hVolume': string,
    contractAddresses?: string[]
}

export const initCoin = (): CoinType[] => {
    return [
        {
            uuid: '',
            symbol: '',
            name: '',
            color: '',
            iconUrl: '',
            marketCap: '',
            price: '',
            btcPrice: '',
            listedAt: 0,
            change: '',
            lowVolume: false,
            tier: 0,
            rank: '',
            sparkline: [],
            coinrankingUrl: '',
            '24hVolume': ''
        }
    ]
}