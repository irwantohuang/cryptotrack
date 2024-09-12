export interface PriceHistoryType {
    price: string,
    timestamp: number
}

export const initPriceHistory = (): PriceHistoryType[] => {
    return [
        {
            price: "",
            timestamp: 0
        }
    ]
}