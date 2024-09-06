export const formatNumber = (value: number | undefined, digit?: number) => {
    if (value) {
        return new Intl.NumberFormat(undefined, {
            notation: "compact",
            maximumFractionDigits: (digit) ? digit : 2,
        }).format(value);
    }
    return undefined;
}
