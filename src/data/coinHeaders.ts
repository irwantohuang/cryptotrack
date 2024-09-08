import { CoinType } from "../types/Coins";

// export interface CoinHeaderType {
//     name: string,
//     align: string, 
//     sortIcon?: IconNode
// }

export interface CoinHeaderType {
    id: keyof CoinType
    name: string,
    align: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    sortable?: boolean
}

export const homeCoinHeader: CoinHeaderType[] = [
    { id: "rank", name: "#", align: "center" },
    { id: "name", name: "Name", align: "left" },
    { id: "price", name: "Price", align: "right" },
    { id: "marketCap", name: "Market Cap", align: "right" },
    { id: "change", name: "24 %", align: "right" },
    { id: "sparkline", name: "Last 7 Days", align: "center" },
]


export const cryptoCoinHeader: CoinHeaderType[] = [
    { id: "rank", name: "#", align: "center", sortable: false },
    { id: "name", name: "Name", align: "left", sortable: false },
    { id: "price", name: "Price", align: "right", sortable: true },
    { id: "marketCap", name: "Market Cap", align: "right", sortable: true },
    { id: "change", name: "24 %", align: "right", sortable: true },
    { id: "24hVolume", name: "Volume (24h)", align: "right", sortable: true },
    { id: "sparkline", name: "Last 7 Days", align: "center", sortable: false },
]