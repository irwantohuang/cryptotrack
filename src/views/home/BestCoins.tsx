import { useDispatch, useSelector } from "react-redux"
import { CoinOverviewType } from "../../types/CoinOverview"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react"
import { fetchCoins } from "../../services/coin-ranking/index.services"
import { BEST_COIN } from '../../constants/constant'
import CoinCard from "../../components/coin/CoinCard"
import CardSkeleton from "../../components/skeleton/CardSkeleton"

interface BestCoinsProps {
    bestCoinOverview: CoinOverviewType[]
}

const BestCoins = ({ bestCoinOverview }: BestCoinsProps) => {

    const { bestCoins, loading, error } = useSelector((state: RootState) => state.coin);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const uuids = bestCoinOverview.map(coin => coin.uuid);
        dispatch(fetchCoins({ type: BEST_COIN, request: { uuids, timePeriod: '7d' } }))
    }, [dispatch, bestCoinOverview])

    return (
        <section className='w-full h-full py-20'>
            <div className='container mx-auto p-4'>
                <div className="text-center max-w-screen-md mx-auto">
                    <p data-aos="fade-down" className="text-2xl lg:text-4xl text-primary-white">
                        Explore some of the
                        <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-200  via-primary-300 to-primary-white-200 from-5% via-70%">
                            <br className="md:hidden" /> best performing </span>
                        coins in the market right now.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center max-w-screen-xl mx-auto mt-8 gap-x-6 gap-y-4">


                    {loading ? Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    )) :
                        bestCoins.map((coin, index) => (
                            <CoinCard key={coin.uuid} coin={coin} index={index} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default BestCoins