import { ArrowRightLeft, ChartNoAxesColumn, CircleDollarSign, Repeat, Store } from "lucide-react"
import StatisticCard from "../../components/statistic/StatisticCard"

interface StatisticProps {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: string,
    total24hVolume: string,
    btcDominance: number,
}

const Statistic = ({ totalCoins, totalMarkets, totalExchanges, totalMarketCap, total24hVolume, btcDominance }: StatisticProps) => {

    return (
        <section className='w-full h-full py-12 bg-primary-black-200'>
            <div className='container mx-auto py-4 px-4'>
                <div className="text-center max-w-screen-md mx-auto">
                    <p className="text-xl lg:text-4xl text-transparent bg-gradient-to-br from-primary-white to-primary to-95% from-75% bg-clip-text">
                        Get a snapshot of the current state of the cryptocurrency market with these key statistics.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 w-full mt-8 max-w-screen-xl mx-auto">
                    <StatisticCard title="Total Coins" subtitle={totalCoins} Icon={CircleDollarSign} />
                    <StatisticCard title="Total Markets" subtitle={totalMarkets} Icon={Store} />
                    <StatisticCard title="Total Exchanges" subtitle={totalExchanges} Icon={ArrowRightLeft} />
                    <StatisticCard title="Total Market Cap" subtitle={totalMarketCap} Icon={Repeat} />
                    <StatisticCard title="Total 24H Volume" subtitle={total24hVolume} Icon={ChartNoAxesColumn} />
                    <StatisticCard title="BTC Dominance" subtitle={btcDominance} Icon={ChartNoAxesColumn} />
                </div>

            </div>
        </section>
    )
}

export default Statistic