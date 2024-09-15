import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { fetchNewsApiCors } from "../../services/news-api";
import NewsCard from "../../components/news/NewsCard";
import Button from "../../components/elements/Button";
import { Link } from "react-router-dom";
import NewsCardSkeleton from "../../components/skeleton/NewsCardSkeleton";
import ErrorFetch from "../../components/ErrorFetch";

const News = () => {
    const { loading, error, newsCorsData } = useSelector((state: RootState) => state.news);

    const dispatch = useDispatch<AppDispatch>();

    // can use just in local cause cors.
    // useEffect(() => {
    //     const domains = NEWS_DOMAINS.join(',');
    //     dispatch(fetchNewsEverything({
    //         q: "cryptocurrency",
    //         sortBy: 'publishedAt',
    //         pageSize: 3,
    //         page: 1,
    //         domains: domains
    //     }))
    // }, [dispatch])

    useEffect(() => {
        dispatch(fetchNewsApiCors({
            query: "Cryptocurrency",
            language: "en",
            page: 1,
            limit: 3
        }))
    }, [dispatch])

    return (
        <div className="relative overflow-hidden py-20">
            <div className="w-[375px] h-[375px] bg-gradient-to-br from-primary/50 to-primary-200/25 rounded-full absolute top-1/3 -translate-y-1/3 right-2/4 blur-[80px]" />
            <div className="w-[375px] h-[375px] bg-gradient-to-br from-cyan-400/25 to-primary-200/25 rounded-full absolute top-[10%] left-2/4 blur-[60px]" />

            <div className="container mx-auto p-4">
                <div className="max-w-screen-md mx-auto text-center">
                    <p data-aos="fade-up" className="text-2xl lg:text-4xl text-primary-white">
                        Catch up on the
                        <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-300  via-accent to-primary-white">
                            <br className="md:hidden" /> latest headlines </span>
                        in the world of cryptocurrencies. Stay informed about market movements, regulatory news, and technology updates.
                    </p>
                </div>


                <div className="grid justify-center mx-auto grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-x-2 gap-y-8 mt-12">
                    {loading ? Array.from({ length: 3 }).map((_, index) => (
                        <NewsCardSkeleton key={index} />
                    )) :
                        error ? <ErrorFetch message={error} /> :
                            newsCorsData.data.map((article, index) => (
                                <NewsCard article={article} index={index} key={index} />
                            ))
                    }
                </div>

                <div className="flex items-center justify-center mt-8">
                    <Button
                        data-aos="fade"
                        data-aos-duration="500"
                        size={"pill"}
                        className="px-24
                        ">
                        <Link to="/news">
                            View all
                        </Link>
                    </Button>
                </div>
            </div>
        </div>


    )
}

export default News