import { CoinDetailType } from '../../types/CoinDetailType'

const CoinDescription = ({name, description, websiteUrl, links}: CoinDetailType) => {
    return (
        <>
            <h4 className='text-2xl font-medium text-primary-white-200/75'>about 
                <a href={websiteUrl} target='_blank' className="text-4xl font-semibold text-primary-white hover:text-accent"> {name}</a>
            </h4>

            <p className='text-base font-medium mt-2 text-primary-white-200'>{description}</p>
            <div className='flex flex-wrap whitespace-nowrap gap-2 mt-4'>
                {links.map((link) => (
                    <a href={link.url} target='_blank' className='px-2 py-1 text-sm font-medium rounded bg-primary-black-300 text-primary-white-200 lowercase transition-colors hover:bg-primary-black-200 hover:text-accent duration-300'>{link.name}</a>
                ))}
            </div>
        </>
    )
}

export default CoinDescription