import { NewsArticleType } from '../../types/NewsArticle'
import { formatPublishedAt } from '../../utils/utility'
import { Clock } from 'lucide-react'

interface NewsCardProps {
    article: NewsArticleType,
    index: number
}

const NewsList = ({ article, index }: NewsCardProps) => {
    const { url, urlToImage, title, description, source, publishedAt } = article
    return (
        <a data-aos="fade-right" data-aos-delay={index * 100} href={url} target='_blank' key={index} className='cursor-pointer transition-all duration-150 hover: hover:shadow-md rounded-md group flex items-start gap-4'>
            <div className='flex-shrink relative aspect-video min-w-[300px] max-w-[300px] min-h-[175px] max-h-[175px] rounded overflow-hidden'>
                <img src={urlToImage} alt={title} className='object-cover object-center' />
            </div>

            <div className='news-list-body'>
                <p className="font-semibold text-lg font-secondary line-clamp-2 transition-all duration-150 group-hover:text-accent">{title}</p>
                <p className="mt-2 text-sm font-secondary text-primary-white-200 line-clamp-2 font-light text-justify transition-all duration-150 group-hover:text-primary-white">
                    {description}
                </p>
                <div className="flex items-center gap-4 mt-4">
                    <p className="font-medium text-base text-primary-white-200 font-secondary transition-all duration-150 group-hover:text-primary-300">{source.name}</p>
                    <div className='flex items-center gap-1'>
                        <Clock size={14}/>
                        <p className="font-medium text-sm text-primary-white-200">
                            {formatPublishedAt(new Date(publishedAt))}
                        </p>
                    </div>
                </div>
            </div>

        </a>

    )
}

export default NewsList