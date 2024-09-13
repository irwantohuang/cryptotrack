import Button from '../../components/elements/Button'
import { ChevronLeft } from 'lucide-react'
import SearchInput from '../../components/elements/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { useEffect, useState } from 'react'
import { fetchSearch } from '../../services/coin-ranking/search.services'
import { CoinOverviewType } from '../../types/CoinOverview'
import { Link } from 'react-router-dom'

const DetailHeader = () => {

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

    useEffect(() => {
        dispatch(fetchSearch({}))
    }, [dispatch])

    return (
        <header className="h-[70px] lg:h-[85px] w-full border-b-2 border-b-primary-white-200/45">
            <div className="mx-auto h-full px-8 lg:px-12">
                <div className='flex h-full items-center'>
                    <Link to="/" data-aos="fade-right">
                        <Button className='flex items-center flex-shrink gap-2 py-2 lg:px-4 rounded-full' variant={"ghost"}>
                            <ChevronLeft className='p-0' />
                            <span className='hidden lg:inline-block'>Back</span>
                        </Button>
                    </Link>

                    <div className='w-full px-2 lg:px-12 flex-grow mx-auto'>
                        <SearchInput coins={coinSuggestions} searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder='Search Coins...' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DetailHeader