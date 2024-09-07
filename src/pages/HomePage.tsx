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

const HomePage = () => {
    // const { loading, error, statistic } = useSelector((state: RootState) => state.statistic);
    // const dispatch = useDispatch<AppDispatch>();

    const statistic: StatisticType = {
        "totalCoins": 41722,
        "totalMarkets": 40239,
        "totalExchanges": 186,
        "totalMarketCap": "2032595825323",
        "total24hVolume": "54144822025",
        "btcDominance": 54.36942543298724,
        "bestCoins": [
            {
                "uuid": "rGDiacWtB",
                "symbol": "HNT",
                "name": "Helium",
                "iconUrl": "https://cdn.coinranking.com/W1QJJplrg/helium-hnt.png",
                "coinrankingUrl": "https://coinranking.com/coin/rGDiacWtB+helium-hnt"
            },
            {
                "uuid": "MMZLepqy",
                "symbol": "BLUR",
                "name": "BLUR",
                "iconUrl": "https://cdn.coinranking.com/NxULGjXlu/BLUR.png",
                "coinrankingUrl": "https://coinranking.com/coin/MMZLepqy+blur-blur"
            },
            {
                "uuid": "-IiS0ZkpW",
                "symbol": "Avail",
                "name": "Avail Token",
                "iconUrl": "https://cdn.coinranking.com/xVSWxfVVg/avail.png",
                "coinrankingUrl": "https://coinranking.com/coin/-IiS0ZkpW+availtoken-avail"
            }
        ],
        "newestCoins": [
            {
                "uuid": "A9Tk3ZmTn",
                "symbol": "CHIK",
                "name": "CHIK",
                "iconUrl": "https://cdn.coinranking.com/PWZJizJ_b/chick.png",
                "coinrankingUrl": "https://coinranking.com/coin/A9Tk3ZmTn+chik-chik"
            },
            {
                "uuid": "j-QHkp4gwV",
                "symbol": "SOLMON",
                "name": "Solamon",
                "iconUrl": "https://cdn.coinranking.com/AfpeOYazQ/Solmon.png",
                "coinrankingUrl": "https://coinranking.com/coin/j-QHkp4gwV+solamon-solmon"
            },
            {
                "uuid": "78FmZi7iu",
                "symbol": "TRUMP",
                "name": "TRUMP MAGA SUPER",
                "iconUrl": "https://cdn.coinranking.com/ZZzpIITUi/trump-maga-super.png",
                "coinrankingUrl": "https://coinranking.com/coin/78FmZi7iu+trumpmagasuper-trump"
            }
        ]
    };

    // useEffect(() => {
    // dispatch(fetchStatistic())
    // }, [dispatch])

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <Hero />
            <Overview />
            <TopCoins />
            <Statistic {...statistic} />
            <BestCoins bestCoinOverview={statistic.bestCoins} />
            <NewestCoin />
            <News />
        </div>
    )
}

export default HomePage