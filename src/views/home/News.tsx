import { useDispatch, useSelector } from "react-redux"
import { formatPublishedAt } from "../../utils/utility"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { fetchNewsEverything } from "../../services/news-api/index.services";
import { NEWS_DOMAINS } from "../../constants/constant";
import { NewsResponseType } from "../../types/NewsResponse";
import NewsCard from "../../components/news/NewsCard";

const News = () => {
    const { loading, error, newsData } = useSelector((state: RootState) => state.news);

    const dispatch = useDispatch<AppDispatch>();


    // useEffect(() => {
    //     const domains = NEWS_DOMAINS.join(',');
    //     dispatch(fetchNewsEverything({
    //         q: "cryptocurrency",
    //         sortBy: 'publishedAt',
    //         pageSize: 3,
    //         domains: domains
    //     }))
    // }, [dispatch])

    const news: NewsResponseType = {
        "status": "ok",
        "totalResults": 93,
        "articles": [
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Al Jazeera",
                "title": "Trump pledges to tap Elon Musk to head government efficiency commission",
                "description": "Republican presidential candidate says commission to audit entire federal government and suggest 'drastic reforms'.",
                "url": "https://www.aljazeera.com/news/2024/9/5/trump-pledges-to-tap-elon-musk-to-head-government-efficiency-commission",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/09/AP24249631207378-1725562954.jpg?resize=1920%2C1440",
                "publishedAt": "2024-09-05T20:30:22Z",
                "content": "Former United States President Donald Trump has pledged to create a government efficiency commission headed by entrepreneur Elon Musk if he is victorious in seeking re-election this November.\r\nTrump … [+3630 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "Andrey Sergeenkov, Contributor, \n Andrey Sergeenkov, Contributor\n https://www.forbes.com/sites/andreysergeenkov/",
                "title": "Ryan Selkis Leaves Messari For New Political Initiative",
                "description": "Aims to build 'Parallel Washington' using modern technologies",
                "url": "https://www.forbes.com/sites/digital-assets/2024/09/05/ryan-selkis-leaves-messari-for-new-political-initiative/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9f78bcdd038e54b6e2b9d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                "publishedAt": "2024-09-05T18:33:20Z",
                "content": "Ryan Selkis, co-founder and chief executive officer of Messari. Photographer: Matthew ... [+] Busch/Bloomberg\r\n© 2023 Bloomberg Finance LP\r\nRyan Selkis, founder of cryptocurrency research firm Messar… [+2806 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "David G.W. Birch, Contributor, \n David G.W. Birch, Contributor\n https://www.forbes.com/sites/davidbirch/",
                "title": "Brian Armstrong, Bots And Bank Accounts. Non-Human Customers Are Here",
                "description": "Standard Chartered Group Chief Data Officer Shameek Kundu says that “the biggest new thing will be the growth of non-human customers”. I could not agree more.",
                "url": "https://www.forbes.com/sites/davidbirch/2024/09/05/brian-armstrong-bots-and-bank-accounts-non-human-customers-are-here/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9f0bbeaa83ded47df0b78/0x0.jpg?format=jpg&crop=2742,1543,x0,y141,safe&height=900&width=1600&fit=bounds",
                "publishedAt": "2024-09-05T18:04:10Z",
                "content": "CEO of cryptocurrency platform Coinbase Brian Armstrong attends a reception at Buckingham Palace ... [+] (Photo by Daniel Leal - WPA Pool/Getty Images)\r\nGetty Images\r\nCoinbase founder Brian Armstrong… [+5564 chars]"
            }
        ]
    }


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
                    {news.articles.map((article, index) => (
                        <NewsCard article={article} index={index} key={index} />
                    ))}
                </div>
            </div>
        </div>


    )
}

export default News