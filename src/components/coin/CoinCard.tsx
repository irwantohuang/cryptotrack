import { Link } from "react-router-dom"
import { CoinType } from "../../types/Coins"
import { formatPrice } from "../../utils/utility"
import Sparkline from "../elements/chart/Sparkline"

interface CoinCardProps {
    coin: CoinType,
    index: number
}

const CoinCard = ({ coin, index }: CoinCardProps) => {
    const { iconUrl, name, symbol, price, change, sparkline } = coin;
    return (
        <Link to={`/cryptocurrencies/${coin.uuid}`} data-aos="fade-up" data-aos-delay={index * 100} className="min-h-full">
            <div className='relative w-[300px] h-full py-4 px-4 rounded-md hover:scale-105 transition-all duration-150 flex flex-col justify-between items-center
             [background:linear-gradient(45deg,#241b35,#342a45_50%,#241b35)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_#6c35de_86%,_#ffc7ff_90%,_#6c35de_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border
        '>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-200 overflow-hidden rounded-full flex-shrink-0">
                        <img src={iconUrl} alt="" className="object-cover w-full" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-lg font-medium text-primary-white">{name} ({symbol})</p>
                        <div>
                            <p className="inline-block text-primary-white-200 me-1">${formatPrice(Number(price))}</p>
                            <p className="inline-block">
                                <span className={`${Number(change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    ({Number(change) > 0 && '+'}
                                    {formatPrice(Number(change), 2)}% 24h)
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full">
                    <Sparkline
                        data={sparkline
                            .filter(e => e !== null && !isNaN(Number(e)))
                            .map(value => parseFloat(value as string))}
                    />
                </div>
            </div>
        </Link>
    )
}

export default CoinCard