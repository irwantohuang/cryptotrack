import { useDispatch, useSelector } from "react-redux"
import NewsCard from "../components/news/NewsCard"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { NEWS_DOMAINS } from "../constants/constant"
import { fetchNewsEverything } from "../services/news-api"
import Button from "../components/elements/Button"
import Loading from "../components/elements/Loading"
import SearchInput from "../components/elements/SearchInput"
import NewsList from "../components/news/NewsList"
import { Grid, List } from "lucide-react"
import ErrorFetch from "../components/ErrorFetch"

const NewsPage = () => {
    const { newsData, loading, error } = useSelector((state: RootState) => state.news)
    const dispatch = useDispatch<AppDispatch>();
    const [searchTerm, setSearchTerm] = useState("")
    const [layoutMode, setLayoutMode] = useState("grid")

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

    useEffect(() => {
        const domains = NEWS_DOMAINS.join(',');
        if (searchTerm.length >= 3) {
            dispatch(fetchNewsEverything({
                q: searchTerm,
                sortBy: 'publishedAt',
                pageSize: 12,
                domains: domains,
                page: 1
            }))
        } else {
            dispatch(fetchNewsEverything({
                q: "Cryptocurrency",
                sortBy: 'publishedAt',
                pageSize: 12,
                domains: domains,
                page: 1
            }))
        }
    }, [searchTerm, dispatch])


    return (
        <div className='w-full overflow-x-hidden py-4 lg:pb-20 lg:pt-[120px] '>
            <div className="container p-4 mx-auto">
                <header className="mb-6 mt-4" data-aos="fade" data-aos-delay="200">
                    <h1 className="text-4xl font-semibold text-center mt-2">
                        Stay updated with the
                        <span className="text-4xl md:text-5xl font-semibold font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-200  via-primary-300 to-primary-white-200 from-5% via-70%"> latest news </span>
                        and updates.
                    </h1>
                </header>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex-grow max-w-screen-md">
                        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={"Search Bitcoin, Altcoin..."} />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button data-aos="fade-left" onClick={() => setLayoutMode("grid")} className="p-3" variant={`${layoutMode === 'grid' ? "default" : "ghost"}`}>
                            <Grid />
                        </Button>
                        <Button data-aos="fade-left" data-aos-delay="100" onClick={() => setLayoutMode("list")} className="p-3" variant={`${layoutMode === 'list' ? "default" : "ghost"}`}>
                            <List />
                        </Button>
                    </div>
                </div>

                {loading && searchTerm.length >= 3 ? 
                    <div className="mt-12 flex items-center justify-center">
                        <Loading />
                    </div>
                :
                
                error ? 
                    <div className="w-full h-full mt-12 flex items-center justify-center">
                        <ErrorFetch />
                    </div>
                : newsData.totalResults === 0 && !loading ? 
                    <div className="mt-12 flex flex-col gap-2 items-center justify-center">
                        <p className="text-xl font-medium text-primary-white">No results found for "{searchTerm}"</p>
                        <p className="text-base text-primary-white-200">Please try searching for something else.</p>
                    </div>
                
                : layoutMode === 'grid' ?
                    <div className="grid justify-center mx-auto grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-2 gap-y-8 mt-12">
                        {newsData.articles.map((article, index) => (
                            <NewsCard article={article} key={index} />
                        ))}
                    </div>
                    :
                    <div className="flex flex-col w-full py-4 mt-12 gap-4">
                        {newsData.articles.map((article, index) => (
                            <NewsList article={article} key={index} />
                        ))}
                    </div>
                }



                <div className="flex items-center justify-center mt-12 w-full mx-auto">
                    {(newsData.articles.length + 1) <= newsData.totalResults && !loading && !error && <Button className="px-8" onClick={loadMore}>
                        Load more...
                    </Button>}

                    {loading && searchTerm.length < 3 && <Loading />}
                </div>
            </div>
        </div>
    )
}

export default NewsPage