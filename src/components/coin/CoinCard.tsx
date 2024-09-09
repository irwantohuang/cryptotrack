import { CoinType } from "../../types/Coins"
import { formatNumber } from "../../utils/utility"
import Sparkline from "../elements/chart/Sparkline"

interface CoinCardProps {
    coin: CoinType,
    index: number
}

const CoinCard = ({coin, index}: CoinCardProps) => {
    const { iconUrl, name, symbol, price, change, sparkline } = coin;
    return (
        <div data-aos="fade-up" data-aos-delay={index * 100} className='relative w-[300px] py-4 px-4 rounded-md hover:scale-105 transition-all duration-150
             [background:linear-gradient(45deg,#241b35,#342a45_50%,#241b35)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_#6c35de_86%,_#ffc7ff_90%,_#6c35de_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border
        '>
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-200 overflow-hidden rounded-full">
                    <img src={iconUrl} alt="" className="object-cover w-full" />
                </div>
                <div className="flex flex-col items-start gap-1">
                    <p className="text-lg font-medium text-primary-white">{name} ({symbol})</p>
                    <div>
                        <p className="inline-block text-primary-white-200">${formatNumber(Number(price))}</p>
                        <p className="inline-block ps-2">
                            <span className={`${Number(change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                ({Number(change) > 0 && '+'}
                                {formatNumber(Number(change))}% 24h)
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <div className="mt-4 h-full w-full">
                <Sparkline data={sparkline.map(value => parseFloat(value))} />
            </div>
        </div>
    )
}

export default CoinCard