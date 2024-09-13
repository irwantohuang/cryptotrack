import { NewsArticleType } from '../../types/NewsArticle'
import { formatPublishedAt } from '../../utils/utility'

interface NewsCardProps {
    article: NewsArticleType,
    index?: number
}

const NewsCard = ({ article, index }: NewsCardProps) => {
    const { url, urlToImage, title, description, source, publishedAt } = article
    return (
        <a data-aos="fade-down" data-aos-delay={index && index * 100} href={url} target="_blank" className="p-2 cursor-pointer transition-all duration-150 hover:shadow-xl group">
            <div className="relative aspect-video rounded overflow-hidden">
                <img src={urlToImage} alt={title} className="object-cover" />
                <div className="absolute inset-0 transition-all duration-150  group-hover:bg-gradient-to-r from-primary/50 to-primary-200/50 opacity-25" />
            </div>
            <div className="card-body mt-2">
                <p className="font-semibold text-lg font-secondary line-clamp-2 transition-all duration-150 group-hover:text-accent">{title}</p>
                <p className="mt-2 text-sm font-secondary text-primary-white-200 line-clamp-5 font-light text-justify transition-all duration-150 group-hover:text-primary-white">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <p className="font-medium text-base text-primary-white-200 font-secondary transition-all duration-150 group-hover:text-primary-300">{source.name}</p>
                    <p className="font-medium text-sm text-primary-white-200">{formatPublishedAt(new Date(publishedAt))}</p>
                </div>
            </div>
        </a>
    )
}

export default NewsCard