interface CoinStatisticsProps {
    title: string,
    value: string | number
}

const CoinStatistics = ({ title, value }: CoinStatisticsProps) => {
    return (
        <div className="flex items-center justify-between py-3 border-b border-b-primary-white-200/50">
            <h5 className="font-semibold text-primary-white-200/75">{title}</h5>
            <p className="text-primary-white font-medium">{value}</p>
        </div>
    )
}

export default CoinStatistics