interface CoinStatisticsProps {
    title: string,
    value: string | number,
    delay?: string
}

const CoinStatistics = ({ title, value, delay }: CoinStatisticsProps) => {
    return (
        <div className="flex items-center justify-between py-3 border-b border-b-primary-white-200/50">
            <h5 data-aos="fade-right" data-aos-offset="10" data-aos-delay={delay} className="font-semibold text-primary-white-200/75">{title}</h5>
            <p data-aos="fade-left" data-aos-offset="10" data-aos-delay={delay} className="text-primary-white font-medium">{value}</p>
        </div>
    )
}

export default CoinStatistics