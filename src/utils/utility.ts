export const formatNumber = (views: number | undefined) => {
    if (views) {
        return new Intl.NumberFormat(undefined, {
            notation: "compact"
        }).format(views);
    }
}
