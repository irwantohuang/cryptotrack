import { CoinType } from '../../types/Coins'
import { formatNumber } from '../../utils/utility'
import Sparkline from '../elements/chart/Sparkline'

const CoinList = ({ iconUrl, name, symbol, price, change, sparkline }: CoinType) => {
    return (
        <div className='w-full bg-primary-black-200 max-w-xl p-4 rounded shadow transition-all duration-150 hover:-translate-y-2'>
            <div className='flex items-center justify-between h-full flex-shrink'>
                <div className='flex gap-4'>
                    <div className="w-16 h-16 bg-red-200 overflow-hidden rounded-full">
                        <img src={iconUrl} alt="" className="object-cover w-full" />
                    </div>
                    <div className='flex items-start gap-1 flex-col'>
                        <p className="text-lg font-medium text-primary-white">{name} ({symbol})</p>
                        <div>
                            <p className='inline-block text-primary-white-200/75'>
                                {price ? `$ ${formatNumber(Number(price), 10)}` : '-'}
                            </p>
                            <p className='inline-block ps-2'>
                                {change !== null && <span className={`${Number(change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    ({Number(change) > 0 && '+'}
                                    {formatNumber(Number(change))}% 24h)
                                </span>}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-[50px] max-w-[100px] flex items-center justify-center">
                    <Sparkline
                        data={sparkline
                            .filter(e => e !== null && !isNaN(Number(e)))
                            .map(value => parseFloat(value as string))}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoinList