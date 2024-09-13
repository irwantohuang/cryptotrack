import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react"
import { fetchStatistic } from "../services/coin-ranking/statistic.services"
import { BestCoins, Faq, Hero, NewestCoin, News, Overview, SecurityTips, Statistic, TopCoins } from "../views/home"

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