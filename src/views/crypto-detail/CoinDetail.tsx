import { ChevronDown, ChevronUp } from "lucide-react"
import { CoinDetailType } from "../../types/CoinDetailType"
import { formatPrice } from "../../utils/utility"
import CoinStatistics from "../../components/coin/CoinStatistics"
import Image from "../../components/elements/Image"

const CoinDetail = ({ name, iconUrl, symbol, marketCap, change, price, rank, fullyDilutedMarketCap, '24hVolume': volume24h, supply, allTimeHigh, numberOfMarkets, numberOfExchanges, tags }: CoinDetailType) => {

    return (
        <div className="mt-2 lg:mt-0 w-full">
            <div data-aos="fade-left" className="flex items-center whitespace-nowrap flex-wrap gap-x-4 gap-y-2">
                <div className="w-8 h-8">
                    <Image className='object-cover w-full' variant={"profile"} src={iconUrl} alt={name} />
                </div>
                <h3 className="text-3xl text-primary-white font-semibold">{name} </h3>
                <div className="flex items-center gap-2">
                    <p className="text-xl font-medium text-primary-white-200/75">{symbol} Price</p>
                    <p className="text-sm px-2 py-0.5 rounded bg-primary-black-300 font-medium text-primary-white-200/75 transition-colors hover:bg-accent duration-200 hover:text-primary-black">#{rank}</p>
                </div>
            </div>

            <div data-aos="fade-up" className="mt-3 flex items-center gap-4">
                <h3 className="font-semibold text-4xl">
                    {formatPrice(Number(price), 2)}
                </h3>

                <div className={`flex items-center gap-1 ${Number(change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {Number(change) > 0 ?
                        <ChevronUp /> : <ChevronDown />
                    }
                    <p className={`text-lg font-medium `}>{formatPrice(Number(change), 2)}%</p>
                </div>
            </div>

            <div data-aos="fade" className="container mx-auto h-[2px] my-4 rounded-full bg-gradient-to-r from-accent via-primary to-primary-300"></div>


            <div className="flex w-full flex-col">
                <CoinStatistics delay="100" title={"Market Cap"} value={`$${formatPrice(Number(marketCap), 2)}`} />
                <CoinStatistics delay="200" title={"Fully Diluted Valuation"} value={`$${formatPrice(Number(fullyDilutedMarketCap), 2)}`} />
                <CoinStatistics delay="300" title={"24H Trading Volume"} value={`$${formatPrice(Number(volume24h), 2)}`} />
                <CoinStatistics delay="400" title={"Circulating Supply"} value={`$${formatPrice(Number(supply.circulating), 2)}`} />
                <CoinStatistics delay="500" title={"Total Supply"} value={`$${formatPrice(Number(supply.total), 2)}`} />
                <CoinStatistics delay="600" title={"Max Supply"} value={`$${formatPrice(Number(supply.max), 2)}`} />
                <CoinStatistics delay="700" title={"All Time High"} value={`$${formatPrice(Number(allTimeHigh.price), 2)}`} />
                <CoinStatistics delay="800" title={"Number of Markets"} value={`$${formatPrice(Number(numberOfMarkets), 2)}`} />
                <CoinStatistics delay="900" title={"Number of Exchanges"} value={`$${formatPrice(Number(numberOfExchanges), 2)}`} />

                <div className="flex items-center justify-between py-3 border-b border-b-primary-white-200/50">
                    <h5 data-aos="fade-right" className="font-semibold text-primary-white-200/75 me-4">Tags</h5>
                    <div className="flex items-center whitespace-nowrap justify-end flex-wrap gap-2">
                        {tags.map((tag, index) => <p data-aos="fade-left" data-aos-delay={index * 100} key={tag} className="px-2 py-0.5 text-sm rounded 
                        bg-primary-black-300 transition-colors hover:bg-primary-black-200 duration-300">{tag}</p>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoinDetail