export interface Coins {
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
    rank: string,
    sparkline: string[],
    coinRankingUrl: string,
    '24hVolume': string
}

export const initCoin = (): Coins[] => {
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
            rank: '',
            sparkline: [],
            coinRankingUrl: '',
            '24hVolume': ''
        }
    ]
}