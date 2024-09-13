import moment from "moment";

// export const formatNumber = (value: number | undefined, digit?: number, type?: number) => {
//     if (value) {
//         if (type === 1) {
//             return new Intl.NumberFormat(undefined, {
//                 notation: "compact",
//                 maximumFractionDigits: (digit) ? digit : 2,
//             }).format(value);
//         } else if (type === 2) {
//             return Number(Number(value).toFixed(2)).toLocaleString();
//         }
//     } 
//     return "-";
// }

export const formatPrice = (value: number, digit?: number, compact?: boolean) => {
    let precision = 2;

    if (value < 1) {
        precision = 8
    } else if (digit) {
        precision = digit;
    }

    return new Intl.NumberFormat(undefined, {
        notation: (compact) ? "compact" : "standard",
        maximumFractionDigits: precision,
    }).format(value);
}


const timeAgo: { amount: number, name: Intl.RelativeTimeFormatUnit }[] = [
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

        for (let i = 0; i < timeAgo.length; i++) {
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



export const formatTimestamp = (timestamp: number, interval: string) => {
    const date = moment.unix(timestamp);

    switch (interval) {
        case '12h':
        case '24h':
            return date.format('HH:mm');
        default:
            return date.format('DD-MMM');
    }
}

export const removeEmptyLabels = (labels: string[]) => {
    return labels.map((label, index, arr) => {
      return label === '' && index > 0 ? arr[index - 1] : label;
    });
  };
