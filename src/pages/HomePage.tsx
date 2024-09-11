import { useDispatch, useSelector } from "react-redux"
import Hero from "../views/home/Hero"
import Overview from "../views/home/Overview"
import Statistic from "../views/home/Statistic"
import TopCoins from "../views/home/TopCoins"
import { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react"
import { fetchStatistic } from "../services/coin-ranking/statistic.services"
import BestCoins from "../views/home/BestCoins"
import { StatisticType } from "../types/Statistic"
import NewestCoin from "../views/home/NewestCoin"
import News from "../views/home/News"
import SecurityTips from "../views/home/SecurityTips"
import Faq from "../views/home/Faq"

const HomePage = () => {
    const { statistic } = useSelector((state: RootState) => state.statistic);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
    dispatch(fetchStatistic())
    }, [dispatch])

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <Hero />
            <Overview />
            <TopCoins />
            <Statistic {...statistic} />
            <BestCoins bestCoinOverview={statistic.bestCoins} />
            <NewestCoin newCoinOverview={statistic.newestCoins} />
            <News />
            <SecurityTips />
            <Faq />
        </div>
    )
}

export default HomePage