import { CoinType } from "../../types/Coins"
import { formatNumber } from "../../utils/utility"
import Sparkline from "../elements/chart/Sparkline"

const CoinCard = ({iconUrl, name, symbol, price, change, sparkline} : CoinType) => {
    return (
        <div className="w-[300px] bg-primary-black-200 py-4 px-4 rounded-md hover:scale-105 transition-all duration-150">
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