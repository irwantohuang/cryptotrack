import { useDispatch, useSelector } from "react-redux"
import Sparkline from "../../components/elements/chart/Sparkline"
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import Button from "../../components/elements/Button";
import { fetchCoins } from "../../services/coin-ranking/index.services";
import { Link } from "react-router-dom";
import { TOP_COIN } from "../../constants/constant";

const TopCoins = () => {
    // const { loading, error, topCoins } = useSelector((state: RootState) => state.coin);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // dispatch(fetchCoins({ type: TOP_COIN, request: { limit: 10, timePeriod: '7d' }}))
        // dispatch(fetchCoins({ limit: 10, timePeriod: '7d' }))
    }, [dispatch])
    const headers = ["#", "name", "price", "market cap", "24h %", 'Last 7 Days']
    const topCoins = [
        {
            "uuid": "Qwsogvtv82FCd",
            "symbol": "BTC",
            "name": "Bitcoin",
            "color": "#f7931A",
            "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
            "marketCap": "1124087253517",
            "price": "56916.063905327115",
            "listedAt": 1330214400,
            "tier": 1,
            "change": "-4.04",
            "rank": 1,
            "sparkline": [
                "59702.38183436576",
                "59579.33199020241",
                "59043.238672112",
                "59345.55592077819",
                "58672.69850465563",
                "59161.03781788981",
                "58980.390320075276",
                "58921.650481839584",
                "58528.68393614581",
                "58048.783974372425",
                "58109.600591393784",
                "57496.50101349957",
                "58114.496424161254",
                "58536.44474497424",
                "59082.18101741648",
                "58753.172480822344",
                "57912.2420598302",
                "56613.715021781776",
                "56488.23917383599",
                "57792.98779096577",
                "57368.70092219948"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
            "24hVolume": "25662001964",
            "btcPrice": "1",
            "contractAddresses": []
        },
        {
            "uuid": "razxDUgYGNAdQ",
            "symbol": "ETH",
            "name": "Ethereum",
            "color": "#3C3C3D",
            "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
            "marketCap": "292576451828",
            "price": "2396.192357743898",
            "listedAt": 1438905600,
            "tier": 1,
            "change": "-5.99",
            "rank": 2,
            "sparkline": [
                "2530.156456909416",
                "2532.2741848410724",
                "2515.90897302396",
                "2513.5915387150894",
                "2482.3449253020963",
                "2517.518743053308",
                "2513.283197879645",
                "2501.9299124837344",
                "2486.7210972004286",
                "2468.728908188867",
                "2469.641537045144",
                "2430.8007160725992",
                "2482.083772232319",
                "2523.011694244625",
                "2514.41752451773",
                "2493.5861363886684",
                "2448.7865895057457",
                "2365.462617130055",
                "2382.5291390308234",
                "2435.109294731229",
                "2417.3089823348514"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
            "24hVolume": "11082196732",
            "btcPrice": "0.04210045799600038",
            "contractAddresses": []
        },
        {
            "uuid": "HIVsRcGKkPFtW",
            "symbol": "USDT",
            "name": "Tether USD",
            "color": "#22a079",
            "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
            "marketCap": "118287171258",
            "price": "1.001120581181682",
            "listedAt": 1420761600,
            "tier": 1,
            "change": "-0.06",
            "rank": 3,
            "sparkline": [
                "1.0006118678334175",
                "1.0005461140108038",
                "1.0002899663249785",
                "1.000358495786839",
                "1.0001065696659062",
                "1.0001494633687673",
                "1.0002807611246272",
                "1.0002984934325743",
                "1.0003595827959468",
                "1.0002363002733652",
                "1.0001983989040901",
                "1.000240328425395",
                "1.0001650881109798",
                "1.0002069645462732",
                "1.0002993876513864",
                "1.000286482011333",
                "1.0003086204896354",
                "1.0006970672699727",
                "1.0005344614294147",
                "1.000869662636366",
                "1.0007535804956984"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
            "24hVolume": "40585923649",
            "btcPrice": "0.000017589420499051",
            "contractAddresses": [
                "avalanche-c-chain/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7 ",
                "tron/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                "solana/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                "eos/USDT-eos-tethertether",
                "omni/31",
                "bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
                "liquid/ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",
                "ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7",
                "algorand/312769"
            ]
        },
        {
            "uuid": "WcwrkfNI4FUAe",
            "symbol": "BNB",
            "name": "BNB",
            "color": "#e8b342",
            "iconUrl": "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
            "marketCap": "75212020781",
            "price": "505.94895820395925",
            "listedAt": 1503014400,
            "tier": 1,
            "change": "-6.53",
            "rank": 4,
            "sparkline": [
                "543.0285290292535",
                "537.3432432975854",
                "533.1634380218438",
                "539.2971909475368",
                "531.9400488864377",
                "537.8845531862625",
                "536.5973052091446",
                "533.3153299543845",
                "525.923246252406",
                "518.5809341454319",
                "519.3448415289571",
                "511.7838557607653",
                "516.6628445652582",
                "523.7834359819765",
                "533.2081051250204",
                "533.1111562505239",
                "523.9612876227012",
                "513.2643306940037",
                "503.02554760696245",
                "509.5990446380525",
                "507.33612612416556"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/WcwrkfNI4FUAe+bnb-bnb",
            "24hVolume": "733727113",
            "btcPrice": "0.008889387696337245",
            "contractAddresses": [
                "bnb-beacon-chain/",
                "avalanche-c-chain/0x264c1383EA520f73dd837F915ef3a732e204a493",
                "ethereum/0xb8c77482e45f1f44de1745f52c74426c631bdd52"
            ]
        },
        {
            "uuid": "zNZHO_Sjf",
            "symbol": "SOL",
            "name": "Solana",
            "color": "#000",
            "iconUrl": "https://cdn.coinranking.com/yvUG4Qex5/solana.svg",
            "marketCap": "62164030152",
            "price": "133.15644711102485",
            "listedAt": 1586539320,
            "tier": 1,
            "change": "-7.98",
            "rank": 5,
            "sparkline": [
                "145.38356484750636",
                "141.63311925714802",
                "139.32570670529142",
                "139.37012007854432",
                "135.666098922335",
                "138.2494973532813",
                "136.8323733383358",
                "135.67225890146702",
                "133.7752638874781",
                "131.4065844008299",
                "133.75593601333034",
                "129.30841352264665",
                "131.18464133243117",
                "133.38585633853947",
                "135.05514482478094",
                "133.12018947368105",
                "130.29804834908384",
                "127.59302090196137",
                "129.4570684386645",
                "133.50078321289485",
                "132.8359907212544"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/zNZHO_Sjf+solana-sol",
            "24hVolume": "1968567857",
            "btcPrice": "0.002339523114818942",
            "contractAddresses": [
                "cronos/0xc9DE0F3e08162312528FF72559db82590b481800"
            ]
        },
        {
            "uuid": "aKzUVe4Hh_CON",
            "symbol": "USDC",
            "name": "USDC",
            "color": "#7894b4",
            "iconUrl": "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
            "marketCap": "34852058539",
            "price": "0.9989429105010289",
            "listedAt": 1539043200,
            "tier": 1,
            "change": "-0.02",
            "rank": 6,
            "sparkline": [
                "0.9954797638671617",
                "0.9978691237072085",
                "0.9993217425390151",
                "0.9989108401192996",
                "0.99780595911294",
                "0.9989121863023902",
                "0.9986720211064579",
                "0.9992637909826031",
                "0.9998883374485972",
                "0.9995751216007297",
                "0.9984929581966697",
                "0.998623637543236",
                "0.9972292741560347",
                "0.9995193540842671",
                "1.0000992291508202",
                "1.0003333253518385",
                "0.9996566489805679",
                "0.9985559306388838",
                "0.9977919964018306",
                "0.9964303371960447",
                "0.9983163615224182"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
            "24hVolume": "5043312427",
            "btcPrice": "0.000017551159408399",
            "contractAddresses": [
                "avalanche-c-chain/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
                "flow/A.b19436aae4d94622.FiatToken",
                "tron/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
                "stellar/USDC-GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN-1",
                "hedera/0.0.456858",
                "solana/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                "moonbeam/0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9",
                "ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "algorand/31566704",
                "cronos/0xc21223249ca28397b4b6541dffaecc539bff0c59",
                "klaytn/0x6270b58be569a7c0b8f47594f191631ae5b2c86c",
                "bnb-smart-chain/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                "optimism/0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                "polygon/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
                "fantom/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
                "arbitrum/0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                "base/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
            ]
        },
        {
            "uuid": "-l8Mn2pVlRs-p",
            "symbol": "XRP",
            "name": "XRP",
            "color": "#000000",
            "iconUrl": "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
            "marketCap": "31117211043",
            "price": "0.5531795099869736",
            "listedAt": 1421798400,
            "tier": 1,
            "change": "-3.68",
            "rank": 7,
            "sparkline": [
                "0.5733030797689465",
                "0.5659457733984453",
                "0.5629724579623357",
                "0.5637599825330273",
                "0.5601218120689948",
                "0.5666056014091466",
                "0.5679465601033999",
                "0.5663609703483404",
                "0.5612285411874933",
                "0.5577419839398392",
                "0.5570138735385275",
                "0.5489309142836327",
                "0.5533682805704759",
                "0.5625830319668482",
                "0.5666455104789129",
                "0.5677124413726645",
                "0.5639374246130843",
                "0.5520093658402973",
                "0.552483763993093",
                "0.5588321385899444",
                "0.5552116820336124"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp",
            "24hVolume": "881725877",
            "btcPrice": "0.000009719215842247",
            "contractAddresses": []
        },
        {
            "uuid": "VINVMYf0u",
            "symbol": "stETH",
            "name": "Lido Staked Ether",
            "color": "#41c0f5",
            "iconUrl": "https://cdn.coinranking.com/UJ-dQdgYY/8085.png",
            "marketCap": "22923114049",
            "price": "2402.5575638389882",
            "listedAt": 1627012680,
            "tier": 1,
            "change": "-5.71",
            "rank": 8,
            "sparkline": [
                "2555.3141102313484",
                "2543.8181460006044",
                "2519.0507896395375",
                "2516.8822486153585",
                "2496.2016555471937",
                "2524.570584921188",
                "2521.200563560538",
                "2506.9362250453814",
                "2488.258632354595",
                "2471.793073198567",
                "2479.831316261368",
                "2441.863571086598",
                "2503.7142602317203",
                "2527.4616900707183",
                "2524.4794116180296",
                "2491.2837955208593",
                "2451.5823013069867",
                "2377.272873229845",
                "2399.4220497506208",
                "2457.2197458936253",
                "2429.2609571103562"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/VINVMYf0u+lidostakedether-steth",
            "24hVolume": "28160609",
            "btcPrice": "0.04221229296241124",
            "contractAddresses": [
                "ethereum/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
            ]
        },
        {
            "uuid": "a91GCGd_u96cF",
            "symbol": "DOGE",
            "name": "Dogecoin",
            "color": "#c2a633",
            "iconUrl": "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
            "marketCap": "14253752083",
            "price": "0.09774697628916736",
            "listedAt": 1391212800,
            "tier": 1,
            "change": "-2.90",
            "rank": 9,
            "sparkline": [
                "0.10107552577159705",
                "0.09997149228584364",
                "0.10021723485887422",
                "0.10129569562008922",
                "0.10002238652368894",
                "0.10152562114504605",
                "0.10112237304202823",
                "0.10134074959795163",
                "0.10024783962934729",
                "0.09903504844197139",
                "0.09808056646473033",
                "0.09524979897375001",
                "0.09687060161116258",
                "0.09810395166611866",
                "0.09956666166372656",
                "0.09923174016561954",
                "0.09780474203822005",
                "0.09548476688503232",
                "0.09595375176747484",
                "0.09827813891906954",
                "0.0972357936061467"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/a91GCGd_u96cF+dogecoin-doge",
            "24hVolume": "383876550",
            "btcPrice": "0.000001717388195567",
            "contractAddresses": []
        },
        {
            "uuid": "qUhEFk1I61atv",
            "symbol": "TRX",
            "name": "TRON",
            "color": "#eb0029",
            "iconUrl": "https://cdn.coinranking.com/behejNqQs/trx.svg",
            "marketCap": "13384537881",
            "price": "0.1496280785518573",
            "listedAt": 1505260800,
            "tier": 1,
            "change": "-6.00",
            "rank": 10,
            "sparkline": [
                "0.16007217278021518",
                "0.16037592840200132",
                "0.1600496444894147",
                "0.16107351087444605",
                "0.1596482084672154",
                "0.15932300897615004",
                "0.15724881806251892",
                "0.1576054769415999",
                "0.15668659382152092",
                "0.15656434318118076",
                "0.15635935847230714",
                "0.1559250600033054",
                "0.1564783765919234",
                "0.15439934254761803",
                "0.15385709491782865",
                "0.15237730817505077",
                "0.15118135384077558",
                "0.1509615598796772",
                "0.1501399689064857",
                "0.14972255617133542",
                "0.14971316875559756"
            ],
            "lowVolume": false,
            "coinrankingUrl": "https://coinranking.com/coin/qUhEFk1I61atv+tron-trx",
            "24hVolume": "473750136",
            "btcPrice": "0.00000262892526793",
            "contractAddresses": []
        }
    ]
    
    const getAlign = (header: string) => {
        console.log("Header ", header)
        switch(header) {
            case 'name': return 'text-left';
            case 'price':
            case 'market cap':
            case '24 % ': 
                return 'text-right';
            default: return 'text-center'
        }
    }

    return (
        <section className='h-full w-full py-20'>
            <div className='container mx-auto h-full px-4 lg:px-0'>
                
                <div className='text-center'>
                    <span 
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className='text-5xl font-secondary font-semibold bg-clip-text bg-gradient-to-r from-primary-white via-accent to-primary-300 text-transparent'>Top 10 Cryptocurrencies
                    </span>
                    <p 
                        data-aos="fade-up" 
                        data-aos-offset="5"
                        data-aos-delay="200" 
                        className='mt-4 text-2xl max-w-4xl mx-auto text-primary-white-200'>
                            Explore the world's leading cryptocurrencies ranked by market cap. Stay informed with up-to-date information on the most valuable digital assets.
                    </p>
                </div>

                <div className='overflow-x-auto scrollbar w-full lg:px-24 px-0 mt-8 my-4'>
                    <table 
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className='min-w-full'>
                        <thead className='bg-primary rounded-2xl'>
                            <tr className="rounded-xl">
                                {headers.map((header, index) => (
                                    <th key={index} className={`whitespace-nowrap px-6 py-2 font-semibold border-b border-b-primary-white-200 capitalize
                                        ${header === 'name' && 'sticky left-0 bg-primary'}
                                        ${getAlign(header)}
                                    `}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {topCoins.map((row, index) => (
                                <tr 
                                    key={index} 
                                    className={`group ${index % 2 === 0 ? '' : ''} hover:bg-primary-black-200 group`}> 
                                    <td className='px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2 text-center'>{row.rank}</td>
                                    <td className='px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2 sticky left-0 bg-primary-black group-hover:bg-primary-black-200'>
                                        <div className="flex items-center justify-start gap-2">
                                            <img src={row.iconUrl} alt="" className="w-6 h-6" />
                                            <span className="me-4 text-primary-white group-hover:text-accent font-medium font-secondary">{row.name} 
                                                <span className="text-primary-white-200 group-hover:text-primary-white"> ({row.symbol})</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td className='px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2 text-right'>$ { Number(Number(row.price).toFixed(2)).toLocaleString() }</td>
                                    <td className='px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2 text-right'>$ { Number(Number(row.marketCap).toFixed(2)).toLocaleString() }</td>
                                    <td className={`px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2 text-right ${Number(row.change) < 0 ? 'text-red-500' : 'text-green-500'}`}>{ row.change } %</td>
                                    <td className='px-6 border-b border-b-primary-white/15 whitespace-nowrap py-2'>
                                        <div className="flex items-center justify-center max-h-[30px] max-w-[100px] mx-auto">
                                            <Sparkline data={row.sparkline.map(value => parseFloat(value))} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="flex items-center justify-center mt-8">
                    <Button 
                        data-aos="fade"
                        data-aos-duration="500"
                        size={"pill"} 
                        className="px-12">
                        <Link to="/cryptocurrencies">
                            Show more
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default TopCoins