import { CoinType } from "./Coins";

interface Links {
    name: string,
    url: string,
    type: string
}

interface Supply {
    confirmed: boolean,
    supplyAt: number,
    max: string,
    total: string,
    circulating: string
}

interface AllTimeHigh {
    price: string,
    timestamp: number
}

interface Notices {
    type: string,
    value: string
}


export interface CoinDetailType extends CoinType {
    description: string,
    websiteUrl: string,
    links: Links[],
    supply: Supply,
    numberOfMarkets: number,
    numberOfExchanges: number,
    fullyDilutedMarketCap: string,
    priceAt: string,
    allTimeHigh: AllTimeHigh,
    hasContent: boolean,
    notices: Notices[],
    tags: string[],
}

export const initCoinDetailType = (): CoinDetailType => {
    return {
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
        '24hVolume': '',
        description: "",
        websiteUrl: "",
        links: [],
        supply: {
            confirmed: false,
            supplyAt: 0,
            max: "",
            total: "",
            circulating: ""
        },
        numberOfMarkets: 0,
        numberOfExchanges: 0,
        fullyDilutedMarketCap: "",
        priceAt: "",
        allTimeHigh: {
            price: "",
            timestamp: 0
        },
        hasContent: false,
        notices: [],
        tags: []
    }
}