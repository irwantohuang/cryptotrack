export interface CoinType {
    uuid: string,
    symbol: string,
    name: string,
    color: string,
    iconUrl: string,
    marketCap: string | null,
    price: string | null,
    btcPrice: string | null, 
    listedAt: number,
    change: string | null,
    lowVolume: boolean,
    tier: number,
    rank: string | number,
    sparkline: (string | null)[],
    coinrankingUrl: string,
    '24hVolume': string | null,
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