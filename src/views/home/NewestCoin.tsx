import { CoinType } from '../../types/Coins'
import CoinList from '../../components/coin/CoinList'

const NewestCoin = () => {

    const topCoins: CoinType[] = [
        {
            "uuid": "A9Tk3ZmTn",
            "symbol": "CHIK",
            "name": "CHIK",
            "color": "#2d162d",
            "iconUrl": "https://cdn.coinranking.com/PWZJizJ_b/chick.png",
            "marketCap": "287447",
            "price": "0.000346974415256314",
            "listedAt": 1725518715,
            "tier": 3,
            "change": null,
            "rank": 5813,
            "sparkline": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                "0.000341613881314973",
                "0.00034417524488283",
                "0.000340035050760859",
                "0.000346467908624721"
            ],
            "lowVolume": true,
            "coinrankingUrl": "https://coinranking.com/coin/A9Tk3ZmTn+chik-chik",
            "24hVolume": "4132",
            "btcPrice": "6.377460837e-9",
            "contractAddresses": [
                "solana/J6B3vUcsBPoMJM9n8UFRGQttS9s1A7KnToH8QUDzmEDg"
            ]
        },
        {
            "uuid": "j-QHkp4gwV",
            "symbol": "SOLMON",
            "name": "Solamon",
            "color": "#e2d5c1",
            "iconUrl": "https://cdn.coinranking.com/AfpeOYazQ/Solmon.png",
            "marketCap": "5446",
            "price": "0.000005445843480571",
            "listedAt": 1725517353,
            "tier": 3,
            "change": null,
            "rank": 7715,
            "sparkline": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                "0.000030705370546143",
                "0.000021312626286198",
                "0.000023025406222103",
                "0.000016941234101583"
            ],
            "lowVolume": true,
            "coinrankingUrl": "https://coinranking.com/coin/j-QHkp4gwV+solamon-solmon",
            "24hVolume": "4784",
            "btcPrice": "1.00095719e-10",
            "contractAddresses": [
                "solana/2Vw33ExmiteynzqWcRqZpJ1JTuUF6zYbEKX8oVXbpump"
            ]
        },
        {
            "uuid": "78FmZi7iu",
            "symbol": "TRUMP",
            "name": "TRUMP MAGA SUPER",
            "color": "#d3b8b6",
            "iconUrl": "https://cdn.coinranking.com/ZZzpIITUi/trump-maga-super.png",
            "marketCap": null,
            "price": null,
            "listedAt": 1725511713,
            "tier": 3,
            "change": null,
            "rank": 41785,
            "sparkline": [],
            "lowVolume": true,
            "coinrankingUrl": "https://coinranking.com/coin/78FmZi7iu+trumpmagasuper-trump",
            "24hVolume": null,
            "btcPrice": null,
            "contractAddresses": [
                "bnb-smart-chain/0xC1b75f11D319A5F1b676073Daa1f5dcDF0163f0D"
            ]
        }
    ]

    return (
        <section className='w-full h-full py-20 bg-slate-900'>
            <div className='container mx-auto p-4'>
                <div className='text-center max-w-screen-md mx-auto'>
                    <p className='text-2xl lg:text-4xl text-primary-white'>
                        Check out the
                        <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-bl text-transparent from-primary  via-primary-300 to-primary-white/75 from-5% via-70%">
                            <br className="md:hidden" /> recently launched </span>
                        cryptocurrencies and find the next potential gem.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-8 gap-6">
                    {topCoins.map((coin) => (
                        <CoinList key={coin.uuid} {...coin} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewestCoin