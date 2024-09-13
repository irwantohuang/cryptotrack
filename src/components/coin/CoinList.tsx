import { CoinType } from '../../types/Coins'
import { formatPrice } from '../../utils/utility'
import Sparkline from '../elements/chart/Sparkline'

interface CoinListProps {
    coin: CoinType,
    index: number
}

const CoinList = ({ coin, index }: CoinListProps) => {
    const { iconUrl, name, symbol, price, change, sparkline } = coin;

    const getAos = (index: number) => {
        switch (index) {
            case 0: return 'fade-down-right';
            case 1: return 'zoom-in';
            case 2: return 'fade-up-left';
        }
    }

    return (
        <a href={`/cryptocurrencies/${coin.uuid}`} data-aos={getAos(index)} data-aos-delay={index * 100} className='w-full max-w-xl'>
            <div className='bg-gradient-to-br from-primary via-cyan-500 to-accent p-[1.5px] rounded shadow transition-all duration-150 hover:-translate-y-2'>
                <div className='flex items-center justify-between p-4 bg-primary-black-200 rounded h-full'>
                    <div className='flex gap-4'>
                        <div className="w-16 h-16 bg-red-200 overflow-hidden rounded-full flex-shrink-0">
                            <img src={iconUrl} alt="" className="object-cover w-full" />
                        </div>
                        <div className='flex items-start gap-1 flex-col'>
                            <p className="text-lg font-medium text-primary-white">{name} ({symbol})</p>
                            <div>
                                <p className='inline-block text-primary-white-200/75'>
                                    {price ? `$ ${formatPrice(Number(price), 8)}` : '-'}
                                </p>
                                <p className='inline-block ps-2'>
                                    {change !== null && <span className={`${Number(change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        ({Number(change) > 0 && '+'}
                                        {formatPrice(Number(change), 2)}% 24h)
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
        </a>
    )
}

export default CoinList