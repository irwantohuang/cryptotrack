export const formatNumber = (value: number | undefined) => {
    if (value) {
        return new Intl.NumberFormat(undefined, {
            notation: "compact",
            maximumFractionDigits: 2,
        }).format(value);
    }
    return undefined;
}
