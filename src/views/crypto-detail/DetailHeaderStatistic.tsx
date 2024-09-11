import StatisticList from '../../components/statistic/StatisticList'
import { formatNumber } from '../../utils/utility'

interface StatisticProps {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: string,
    total24hVolume: string,
    btcDominance: number,
}

const DetailHeaderStatistic = ({ totalCoins, totalExchanges, totalMarketCap, total24hVolume, btcDominance }: StatisticProps) => {

    return (
        <header className="h-[50px] lg:h-[65px] w-full overflow-auto scrollbar-hidden border-b-2 border-b-primary-black-300">
            <div className="container mx-auto h-full px-8 lg:px-4">
                <div className="flex items-center h-full gap-6 whitespace-nowrap">
                    <StatisticList aos="fade-right" delay={"100"} title={"Coins"} subtitle={formatNumber(totalCoins, undefined, 2) ?? 0} />
                    <StatisticList aos="fade-right" delay={"200"} title={"Exchanges"} subtitle={formatNumber(totalExchanges, undefined, 2) ?? 0} />
                    <StatisticList aos="fade-right" delay={"300"} title={"Market Cap"} subtitle={`$${formatNumber(Number(totalMarketCap), undefined, 1)}`} />
                    <StatisticList aos="fade-right" delay={"400"} title={"24h Vol"} subtitle={`$${formatNumber(Number(total24hVolume), undefined, 1)}`} />
                    <StatisticList aos="fade-right" delay={"500"} title={"Dominance"} subtitle={`BTC ${formatNumber(Number(btcDominance), 1, 1)}%`} />
                </div>
            </div>
        </header>
    )
}

export default DetailHeaderStatistic