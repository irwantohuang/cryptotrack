import { ArrowRightLeft, ChartNoAxesColumn, CircleDollarSign, Repeat, Store } from "lucide-react"
import StatisticCard from "../../components/statistic/StatisticCard"
import { formatPrice } from "../../utils/utility"

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
                    <p data-aos="fade-up" className="text-xl lg:text-4xl text-transparent bg-gradient-to-br from-primary-white to-primary to-95% from-75% bg-clip-text">
                        Get a snapshot of the current state of the cryptocurrency market with these key statistics.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 w-full mt-8 max-w-screen-xl mx-auto">
                    <StatisticCard aos="fade-right" delay="100" title="Total Coins" subtitle={formatPrice(totalCoins)}  Icon={CircleDollarSign} />
                    <StatisticCard aos="fade-right" delay="200" title="Total Markets" subtitle={formatPrice(totalMarkets)} Icon={Store} />
                    <StatisticCard aos="fade-right" delay="300" title="Total Exchanges" subtitle={formatPrice(totalExchanges)} Icon={ArrowRightLeft} />
                    <StatisticCard aos="fade-left" delay="100" title="Total Market Cap" subtitle={`$ ${formatPrice(Number(totalMarketCap), 2, true)}`} Icon={Repeat} />
                    <StatisticCard aos="fade-left" delay="200" title="Total 24H Volume" subtitle={`$ ${formatPrice(Number(total24hVolume), 2, true)}`} Icon={ChartNoAxesColumn} />
                    <StatisticCard aos="fade-left" delay="300" title="BTC Dominance" subtitle={`${formatPrice(Number(btcDominance), 2)} %`} Icon={ChartNoAxesColumn} />
                </div>

            </div>
        </section>
    )
}

export default Statistic