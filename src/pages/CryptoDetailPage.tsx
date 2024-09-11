import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import LineChart from "../components/elements/chart/LineChart";
import SelectDropdown from "../components/elements/SelectDropdown";
import Loading from "../components/elements/Loading";
import NewsList from "../components/news/NewsList";
import { NEWS_DOMAINS } from "../constants/constant";

import { StatisticType } from "../types/Statistic";
import { timePeriodCategories } from "../data/timePeriodCategory";

import CoinDescription from "../views/crypto-detail/CoinDescription";
import DetailHeaderStatistic from "../views/crypto-detail/DetailHeaderStatistic";
import DetailHeader from "../views/crypto-detail/DetailHeader";
import CoinDetail from "../views/crypto-detail/CoinDetail";

import { fetchCoin, fetchPriceHistory } from "../services/coin-ranking/index.services";
import { fetchNewsEverything } from "../services/news-api/index.services";

const CryptoDetailPage = () => {
    const { id } = useParams<{ id: string }>();
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


    const dispatch = useDispatch<AppDispatch>();
    const { history, loading } = useSelector((state: RootState) => state.priceHistory)
    const { coinDetail } = useSelector((state: RootState) => state.coin);
    const { newsData } = useSelector((state: RootState) => state.news);

    const [timePeriod, setTimePeriod] = useState("24h")

    useEffect(() => {
        if (id) {
            dispatch(fetchPriceHistory({
                request: {
                    timePeriod: timePeriod
                },
                uuid: id,
            }))

            dispatch(fetchCoin({
                request: {
                    timePeriod: timePeriod
                },
                uuid: id,
            }))
        }
    }, [dispatch, id, timePeriod])

    useEffect(() => {
        const domains = NEWS_DOMAINS.join(',');
        dispatch(fetchNewsEverything({
            q: coinDetail.name,
            sortBy: 'publishedAt',
            pageSize: 3,
            domains: domains,
            language: "en"
        }))
    }, [dispatch, coinDetail])

    useEffect(() => {

    }, [dispatch])

    // dispatch(fetchStatistic())
    return (
        <div className="overflow-x-hidden w-full">
            {/* Header */}
            <DetailHeaderStatistic {...statistic} />
            <DetailHeader />


            <div className="w-full px-2 lg:px-8 h-full mt-8 flex gap-2 flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 h-full overflow-scroll py-2 relative px-2">
                    <SelectDropdown data={timePeriodCategories} selected={timePeriod} onSelect={setTimePeriod} />
                    {loading && <div className="w-full absolute z-10 h-full flex items-center justify-center bg-primary-black-300/20 rounded">
                        <Loading />
                    </div>}
                    <LineChart history={history} timePeriod={timePeriod} />


                    <div className="mt-4 w-full">
                        <CoinDescription {...coinDetail} />
                    </div>

                    <div className="flex flex-col w-full py-4 mt-8 gap-4">
                        <h5 className="text-2xl font-secondary text-primary-white-200/75 font-medium">{coinDetail.name} Latest News</h5>
                        {newsData.articles.length < 1 ?
                            <p className="text-primary-white-200/50">No news articles available at the moment.</p>
                            :
                            newsData.articles.map((article, index) => (
                                <NewsList article={article} index={index} key={index} />
                            ))
                        }
                    </div>
                </div>

                <div className="mt-8 lg:mt-0 w-full lg:w-1/3 h-full px-2">
                    <CoinDetail {...coinDetail} />
                </div>
            </div>

        </div>
    )
}

export default CryptoDetailPage