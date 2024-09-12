import CoinList from '../../components/coin/CoinList'
import ListSkeleton from '../../components/skeleton/ListSkeleton'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { CoinOverviewType } from '../../types/CoinOverview';
import { fetchCoins } from '../../services/coin-ranking/coins.services';
import { NEW_COIN } from '../../constants/constant';

interface NewestCoinProps {
    newCoinOverview: CoinOverviewType[]
}

const NewestCoin = ({ newCoinOverview }: NewestCoinProps) => {

    const { newCoins, loading, error } = useSelector((state: RootState) => state.coin);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const uuids = newCoinOverview.map(coin => coin.uuid);
        dispatch(fetchCoins({ type: NEW_COIN, request: { uuids, timePeriod: '7d' } }))
    }, [dispatch, newCoinOverview])

    return (
        <section className='w-full h-full py-20 bg-slate-900'>
            <div className='container mx-auto p-4'>
                <div className='text-center max-w-screen-md mx-auto'>
                    <p data-aos="fade-down" className='text-2xl lg:text-4xl text-primary-white'>
                        Check out the
                        <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-bl text-transparent from-primary  via-primary-300 to-primary-white/75 from-5% via-70%">
                            <br className="md:hidden" /> recently launched </span>
                        cryptocurrencies and find the next potential gem.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-8 gap-6">
                    {loading ? Array.from({ length: 3 }).map((_, index) => (
                        <ListSkeleton key={index} />
                    )) :
                        newCoins.map((coin, index) => (
                            <CoinList key={coin.uuid} coin={coin} index={index} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default NewestCoin