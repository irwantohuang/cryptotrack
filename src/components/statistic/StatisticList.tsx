
interface StatisticListProps {
    title: string,
    subtitle: string | number,
    aos?: string,
    delay?: string,
}

const StatisticList = ({ title, subtitle, aos, delay }: StatisticListProps) => {
    return (
        <div data-aos={aos} data-aos-delay={delay} className='flex items-center gap-1'>
            <p className='inline-block text-sm text-primary-white-200/85'>{ title }: </p>
            <p className='inline-block text-sm text-primary-white'>{ subtitle }</p>
        </div>
    )
}

export default StatisticList