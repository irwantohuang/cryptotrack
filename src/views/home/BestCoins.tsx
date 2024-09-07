import { useDispatch } from "react-redux"
import { CoinOverviewType } from "../../types/CoinOverview"
import { AppDispatch } from "../../store/store"
import { useEffect } from "react"
import { fetchCoins } from "../../services/coin-ranking"
import { BEST_COIN } from '../../constants/constant'
import { formatNumber } from "../../utils/utility"
import Sparkline from "../../components/elements/chart/Sparkline"
import CoinCard from "../../components/coin/CoinCard"
import { CoinType } from "../../types/Coins"

interface BestCoinsProps {
    bestCoinOverview: CoinOverviewType[]
}

const BestCoins = ({ bestCoinOverview }: BestCoinsProps) => {


    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const uuids = bestCoinOverview.map(coin => coin.uuid);

        console.log("Uuid..", uuids)
        // dispatch(fetchCoins({ type: BEST_COIN, request: { uuids, timePerios: '7d' } }))
    }, [dispatch, bestCoinOverview])


    const bestCoins: CoinType[] = [
        {
            "uuid": "rGDiacWtB",
            "symbol": "HNT",
            "name": "Helium",
            "color": "#454EFF",
            "iconUrl": "https://cdn.coinranking.com/W1QJJplrg/helium-hnt.png",
            "marketCap": "778074990",
            "price": "7.963954274678243",
            "listedAt": 1567282620,
            "tier": 1,
            "change": "4.86",
            "rank": 77,
            "sparkline": [
                "7.301643362587315",
                "7.080116323934812",
                "7.018818833275735",
                "6.892388117179689",
                "7.245766400163379",
                "7.113258857586249",
                "7.04626558284299",
                "6.990790091700929",
                "7.017592259264465",
                "7.290772742862833",
                "7.3017621911612896",
                "7.5132092373747446",
                "7.553029735295425",
                "7.598852846087566",
                "7.311433421183506",
                "7.246070446407017",
                "7.182289169690812",
                "7.498503338222902",
                "7.648175681364761",
                "7.791914157357663",
                "8.181187593274236"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/rGDiacWtB+helium-hnt",
            "24hVolume": "48781871",
            "btcPrice": "0.00014154915939675",
            "contractAddresses": [
                "solana/hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"
            ]
        },
        {
            "uuid": "MMZLepqy",
            "symbol": "BLUR",
            "name": "BLUR",
            "color": "#000000",
            "iconUrl": "https://cdn.coinranking.com/NxULGjXlu/BLUR.png",
            "marketCap": "292778514",
            "price": "0.15883775899334582",
            "listedAt": 1676419501,
            "tier": 1,
            "change": "-5.76",
            "rank": 154,
            "sparkline": [
                "0.16517964831545662",
                "0.16171446227074876",
                "0.16223262899809932",
                "0.1582666617826157",
                "0.1616606363265125",
                "0.15969659484946136",
                "0.1572067359953276",
                "0.15549622766310875",
                "0.15383756792696152",
                "0.1538265328582438",
                "0.14860287140515785",
                "0.14938668356714455",
                "0.15201708411462905",
                "0.15698438051113917",
                "0.15664459157083316",
                "0.15051000186836608",
                "0.1462185293804451",
                "0.1464048925056559",
                "0.15478368494043596",
                "0.158462589680971",
                "0.16262788682544038"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/MMZLepqy+blur-blur",
            "24hVolume": "49917709",
            "btcPrice": "0.000002823139170633",
            "contractAddresses": [
                "ethereum/0x5283D291DBCF85356A21bA090E6db59121208b44"
            ]
        },
        {
            "uuid": "-IiS0ZkpW",
            "symbol": "Avail",
            "name": "Avail Token",
            "color": "#e9ebf4",
            "iconUrl": "https://cdn.coinranking.com/xVSWxfVVg/avail.png",
            "marketCap": "240672272",
            "price": "0.13793490605088649",
            "listedAt": 1720663003,
            "tier": 1,
            "change": "10.85",
            "rank": 172,
            "sparkline": [
                "0.12191725794802291",
                "0.11947720896735155",
                "0.11975305660630309",
                "0.11365243667690736",
                "0.11756927617184836",
                "0.11509523849614335",
                "0.11242412947364701",
                "0.1098211532967101",
                "0.10842821148284057",
                "0.11398521314267873",
                "0.11403141634644416",
                "0.12117374661625928",
                "0.1218401012229241",
                "0.11989497951028336",
                "0.12284971937083865",
                "0.12574368923597015",
                "0.11972249064705802",
                "0.1258113220743687",
                "0.1320058942020717",
                "0.12994389562533465",
                "0.13750712866710668"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/-IiS0ZkpW+availtoken-avail",
            "24hVolume": "10058356",
            "btcPrice": "0.000002450876338075",
            "contractAddresses": []
        }
    ]

    return (
        <section className='w-full h-full py-20'>
            <div className='container mx-auto p-4'>
                <div className="text-center max-w-screen-md mx-auto">
                    <p className="text-2xl lg:text-4xl text-primary-white">
                        Explore some of the
                        <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-200  via-primary-300 to-primary-white-200 from-5% via-70%"> 
                            <br className="md:hidden"/> best performing </span>
                        coins in the market right now.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center max-w-screen-xl mx-auto mt-8 gap-x-6 gap-y-4">
                {bestCoins.map((coin) => (
                    <CoinCard key={coin.uuid} {...coin}  />
                ))}
            </div>
        </section>
    )
}

export default BestCoins