export interface CoinRequest {
    referenceCurrencyUuid?: string,
    timePeriod?: string,
    symbols?: string,
    uuids?: string | string[],
    tiers?: string,
    tags?: string,
    orderBy?: string,
    search?: string,
    orderDirection?: string,
    limit?: number,
    offset?: number
}