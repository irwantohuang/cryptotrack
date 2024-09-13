import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import Button from "../../components/elements/Button";
import { fetchCoins } from "../../services/coin-ranking";
import { Link } from "react-router-dom";
import { TOP_COIN } from "../../constants/constant";
import CoinTable from "../../components/coin/CoinTable";
import { homeCoinHeader } from "../../data/coinHeaders";
import Loading from "../../components/elements/Loading";

const TopCoins = () => {
    const { loading, topCoins } = useSelector((state: RootState) => state.coin);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCoins({ type: TOP_COIN, request: { limit: 10, timePeriod: '7d' }}))
    }, [dispatch])
    
    return (
        <section id="topCoins" className='h-full w-full py-20'>
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

                <div className='overflow-x-auto relative scrollbar w-full lg:px-24 px-0 mt-8 my-4'>
                    <CoinTable>
                        <CoinTable.TableHead headers={homeCoinHeader} />
                        <CoinTable.TableBody headers={homeCoinHeader} coins={topCoins} />
                    </CoinTable>

                    {loading && <div className="absolute w-full h-full flex items-center justify-center inset-0 bg-primary-black/50 z-[101]">
                        <Loading />
                    </div>}
                </div>

                <div className="flex items-center justify-center mt-8">
                    <Button 
                        data-aos="fade"
                        data-aos-duration="500"
                        size={"pill"} 
                        className="px-24
                        ">
                        <Link to="/cryptocurrencies">
                            View all
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default TopCoins