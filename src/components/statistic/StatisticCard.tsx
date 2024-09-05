import { ElementType } from "react"
import { formatNumber } from "../../utils/utility"

interface StatisticCardProps {
    title: string,
    subtitle: string | number,
    Icon: ElementType
}

const StatisticCard = ({ title, subtitle, Icon }: StatisticCardProps) => {
    return (
        <div className="w-[350px] rounded-md shadow-md lg:py-4 py-2 px-4 bg-primary-black hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-2 lg:gap-4">
                <div className="w-20 h-20 flex items-center justify-center rounded bg-gradient-to-tr from-primary/35 via-primary-200/10 to-primary-300/5 group-hover:scale-90 transition-all duration-300">
                    <Icon className="size-[40px] group-hover:scale-125 transition-all duration-300" />
                </div>
                <div className="flex items-start gap-1 flex-col whitespace-nowrap">
                    <h3 className="text-xl font-semibold text-primary-white">{title}</h3>
                    <p className="text-2xl font-secondary font-medium text-primary-white-200/75">
                        {(title === 'Total Market Cap' || title === 'Total 24H Volume') ? (
                            <>
                                <span className="text-lg">$ </span>
                                {formatNumber(Number(subtitle))}
                            </>
                        ) : title === 'BTC Dominance' ? (
                            <>
                                {formatNumber(Number(subtitle))}
                                <span className="text-lg"> %</span>
                            </>
                        ) : (
                            subtitle.toLocaleString()
                        )
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard