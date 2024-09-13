import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import LineChart from "../components/elements/chart/LineChart";
import SelectDropdown from "../components/elements/SelectDropdown";
import Loading from "../components/elements/Loading";
import NewsList from "../components/news/NewsList";
import { NEWS_DOMAINS } from "../constants/constant";

import { timePeriodCategories } from "../data/timePeriodCategory";

import CoinDescription from "../views/crypto-detail/CoinDescription";
import DetailHeaderStatistic from "../views/crypto-detail/DetailHeaderStatistic";
import DetailHeader from "../views/crypto-detail/DetailHeader";
import CoinDetail from "../views/crypto-detail/CoinDetail";

import { fetchCoin, fetchPriceHistory } from "../services/coin-ranking/index.services";
import { fetchNewsEverything } from "../services/news-api/index.services";
import { fetchStatistic } from "../services/coin-ranking/statistic.services";

const CryptoDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch<AppDispatch>();
    const { history, loading } = useSelector((state: RootState) => state.priceHistory)
    const { coinDetail } = useSelector((state: RootState) => state.coin);
    const { newsData } = useSelector((state: RootState) => state.news);
    const { statistic } = useSelector((state: RootState) => state.statistic)

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
        dispatch(fetchStatistic())
    }, [dispatch])

    return (
        <div className="overflow-x-hidden w-full">
            {/* Header */}
            <DetailHeaderStatistic {...statistic} />
            <DetailHeader />


            <div className="w-full px-2 lg:px-8 h-full mt-8 flex gap-2 flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 h-full py-2 relative px-2">
                    <div data-aos="fade-up">
                        <SelectDropdown data={timePeriodCategories} selected={timePeriod} onSelect={setTimePeriod} />
                    </div>

                    <div className="w-full h-full ">
                        <LineChart history={history} timePeriod={timePeriod} />
                        {loading && <div className="w-full absolute z-10 h-full flex items-center justify-center bg-primary-black-300/20 rounded">
                            <Loading />
                        </div>}
                    </div>

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