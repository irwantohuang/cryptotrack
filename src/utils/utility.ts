export const formatNumber = (value: number | undefined, digit?: number, type?: number) => {
    if (value) {
        if (type === 1) {
            return new Intl.NumberFormat(undefined, {
                notation: "compact",
                maximumFractionDigits: (digit) ? digit : 2,
            }).format(value);
        } else if (type === 2) {
            // return Number(value?.toFixed(2)).toLocaleString();
            return Number(Number(value).toFixed(2)).toLocaleString();

            
        }
    }
    return undefined;
}


const timeAgo: {amount: number, name: Intl.RelativeTimeFormatUnit}[] = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
]

export const formatPublishedAt = (date: Date | undefined) => {
    if (date) {
        let duration = (date.getTime() - new Date().getTime()) / 1000;

        for (let i = 0; i < timeAgo.length; i++ ) {
            const division = timeAgo[i];
            if (Math.abs(duration) < division.amount) {
                return new Intl.RelativeTimeFormat(undefined, {
                    numeric: "always"
                }).format(Math.round(duration), division.name);
            }
            duration /= division.amount
        }
    }
}