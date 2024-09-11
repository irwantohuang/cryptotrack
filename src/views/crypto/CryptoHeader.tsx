import { useEffect, useRef, useState } from "react"
import SearchInput from "../../components/elements/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchSearch } from "../../services/coin-ranking/search.services";
import { CoinOverviewType } from "../../types/CoinOverview";
import CoinCategory from "../../components/coin/CoinCategory";
import { coinCategories } from "../../data/coinCategory";
import CoinTable from "../../components/coin/CoinTable";
import { cryptoCoinHeader } from "../../data/coinHeaders";
import Loading from "../../components/elements/Loading";
import { fetchCoins } from "../../services/coin-ranking/coins.services";
import { CoinRequest } from "../../types/request/CoinRequest";
import { ALL_COINS } from "../../constants/constant";


const CryptoHeader = () => {
    const [fetchCoinRequest, setFetchCoinRequest] = useState<CoinRequest>({
        timePeriod: "7d",
        limit: 50,
        offset: 0
    })

    // Select Category 
    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleSelectCategory = async (e: string) => {
        setSelectedCategory(e);
        setFetchCoinRequest((prev) => ({
            ...prev,
            tags: (e === 'All') ? '' : e.toLowerCase(),
            offset: 0,
            orderBy: undefined,
            orderDirection: undefined,
        }))

        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTop = 0;
        }
    }

    // Sort Table
    const [sortColumn, setSortColumn] = useState<string | null>("marketCap");
    const [sortOrder, setSortOrder] = useState<string | null>("desc");

    // Handle sort, using for handling table data sort.
    const handleSort = async (headerName: string) => {
        let column = sortColumn;
        let order = sortOrder;

        if (sortColumn === headerName) {
            if (sortOrder === 'asc') {
                order = "desc"
            } else if (sortOrder === 'desc') {
                order = null
                column = null
            } else {
                order = 'asc'
            }
        } else {
            order = 'asc';
            column = headerName;
        }

        setSortOrder(order);
        setSortColumn(column)

        setFetchCoinRequest((prev) => ({
            ...prev,
            tags: selectedCategory === 'All' ? '' : selectedCategory || undefined,
            orderBy: column || undefined,
            orderDirection: order || undefined,
            offset: 0,
            limit: 50,
        }))

        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTop = 0;
        }

        console.log("Sort Request... ", fetchCoinRequest)
    }

    const tableContainerRef = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState("")
    const { searchSuggestions } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch<AppDispatch>();
    const [coinSuggestions, setCoinSuggestions] = useState<CoinOverviewType[]>(searchSuggestions);

    // Handle searchTerm changes and update coin suggestions accordingly.
    useEffect(() => {
        if (searchTerm === '') {
            setCoinSuggestions(searchSuggestions)
            console.log("here ok")
        } else if (searchTerm.length > 1) {
            const filteredSuggestions = searchSuggestions.filter((e) => {
                const name = e.name.toLocaleLowerCase();
                const symbol = e.symbol.toLocaleLowerCase();
                const q = searchTerm.toLocaleLowerCase();
                return name.includes(q) || symbol.includes(q)
            });

            setCoinSuggestions(filteredSuggestions);
        } else if (coinSuggestions.length <= 1) {
            setCoinSuggestions(searchSuggestions)
        }

    }, [coinSuggestions.length, searchSuggestions, searchTerm])


    // Handling search suggestion, If searchTerm was not in coinSuggestions list
    // then fetch the search suggestion with user keyowrd (searchTerm)
    useEffect(() => {
        if (searchTerm.length > 1 && coinSuggestions.length <= 1) {
            dispatch(fetchSearch({ query: searchTerm }))
        }
    }, [coinSuggestions.length, dispatch, searchTerm])


    // Handling scrolling within the table container. when user reach the bottom of the table
    // then update the fetchCoinRequest offset to load more coins. 
    useEffect(() => {
        const handleScroll = () => {
            if (tableContainerRef.current) {
                const container = tableContainerRef.current;
                const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

                if (isAtBottom) {
                    console.log("Help iam at bottom container")
                    setFetchCoinRequest((prev) => ({
                        ...prev,
                        offset: (prev?.limit ?? 50) + (prev?.offset ?? 0)
                    }))
                }
            }
        };
        const container = tableContainerRef.current;

        container?.addEventListener('scroll', handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    })


    // Initial Fetch All Coin
    useEffect(() => {
        dispatch(fetchCoins({
            type: ALL_COINS,
            request: fetchCoinRequest
        }))
    }, [dispatch, fetchCoinRequest])


    // Initial Fetch Search Suggestions
    useEffect(() => {
        dispatch(fetchSearch({}))
    }, [dispatch])


    // Redux State
    const coinState = useSelector((state: RootState) => state.coin);

    return (
        <div className='w-full py-20 lg:pb-20 lg:pt-[120px]'>
            <div className="container mx-auto p-4">
                <div className='text-center max-w-screen-md mx-auto'>
                    <p data-aos="fade-up" className='text-2xl lg:text-4xl font-medium text-accent'>
                        Explore the World of Cryptocurrencies
                    </p>
                </div>

                <div className="mt-12">
                    <div className="max-w-screen-md mx-auto">
                        <SearchInput coins={searchSuggestions} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>

                    <div className="mt-2 md:mt-4">
                        <CoinCategory categories={coinCategories} selected={selectedCategory} onSelect={handleSelectCategory} />
                    </div>
                </div>

                <div data-aos="fade" data-aos-delay="300" className="container mx-auto h-[3px] my-4 rounded-full bg-gradient-to-r from-accent via-primary to-primary-300"></div>

                <div className="relative bg-slate-800 w-full h-full">
                    {coinState.loading && <div className="absolute w-full h-full flex items-center justify-center inset-0 bg-primary-black/50 z-[101]">
                        <Loading />
                    </div>}
                    <div ref={tableContainerRef} className={`relative bg-primary-black min-h-[515px] max-h-[515px] w-full lg:px-0 px-0 mt-8 my-4 z-10 ${coinState.loading ? 'overflow-hidden' : 'overflow-auto'}`}>
                        <CoinTable aos="fade-up">
                            <CoinTable.TableHead headers={cryptoCoinHeader} onClick={handleSort}
                                sortOrder={sortOrder} sortColumn={sortColumn}
                            />
                            <CoinTable.TableBody headers={cryptoCoinHeader} coins={coinState.allCoins.coins} />
                        </CoinTable>
                        <div className="sticky inset-x-0 bottom-0 h-10 z-20 w-full bg-gradient-to-t from-primary-black from-50% to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoHeader