import { useDispatch, useSelector } from "react-redux"
import NewsCard from "../components/news/NewsCard"
import { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react"
import { NEWS_DOMAINS } from "../constants/constant"
import { fetchNewsEverything } from "../services/news-api/index.services"
import Button from "../components/elements/Button"
import Loading from "../components/elements/Loading"

const NewsPage = () => {
    const { newsData, loading, error } = useSelector((state: RootState) => state.news)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const domains = NEWS_DOMAINS.join(',');
        dispatch(fetchNewsEverything({
            q: "cryptocurrency",
            sortBy: 'publishedAt',
            pageSize: 12,
            domains: domains,
            page: 1
        }))
    }, [dispatch])

    const loadMore = () => {
        const domains = NEWS_DOMAINS.join(',');
        dispatch(fetchNewsEverything({
            q: "cryptocurrency",
            sortBy: 'publishedAt',
            pageSize: 12,
            domains: domains,
            page: Math.floor(newsData.articles.length / 12) + 1
        }))
    }


    return (
        <div className='w-full overflow-x-hidden py-4 lg:pb-20 lg:pt-[120px] '>
            <div className="container p-4 mx-auto">
                <header className="mb-6 mt-4">
                    <h1 className="text-4xl font-semibold text-center mt-2">
                        Stay updated with the
                        <span className="text-4xl md:text-5xl font-semibold font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-200  via-primary-300 to-primary-white-200 from-5% via-70%"> latest news </span>
                        and updates.
                    </h1>
                </header>

                <div className="grid justify-center mx-auto grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-2 gap-y-8 mt-12">
                    {newsData.articles.map((article, index) => (
                        <NewsCard article={article} index={index} key={index} />
                    ))}
                </div>

                <div className="flex items-center justify-center mt-12 w-full mx-auto">
                    {(newsData.articles.length + 1) <= newsData.totalResults && !loading && <Button className="px-8" onClick={loadMore}>
                        Load more...
                    </Button>}

                    {loading && <Loading />}
                </div>
            </div>
        </div>
    )
}

export default NewsPage