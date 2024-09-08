import { Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { CoinOverviewType } from '../../types/CoinOverview';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Loading from './Loading';


interface SearchInputProps {
    coins: CoinOverviewType[],
    searchTerm: string,
    setSearchTerm: (e: string) => void
}


const SearchInput = ({ coins, searchTerm, setSearchTerm }: SearchInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const cryptoSearch = useSelector((state: RootState) => state.search);


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsFocused(false);
                if (inputRef.current) {
                    inputRef.current.blur();
                }
            }
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    })

    return (
        <div data-aos="fade-right" data-aos-delay="100" className="max-w-screen-md mx-auto relative z-[99]">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search />
                </div>
                <input
                    ref={inputRef}
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-12 text-lg text-primary-white-200 border border-primary-white-200 rounded-lg bg-primary-black-200 focus:border-accent focus:ring-accent outline-none focus:ring-1"
                    placeholder="Search Coin..."
                    value={searchTerm}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* <Button
                    type='submit'
                    onClick={handleSubmit}
                    className='absolute end-2.5 top-1/2 -translate-y-1/2 px-6 py-1.5 rounded'
                >
                    Search
                </Button> */}
            </div>

            {isFocused && <ul className="absolute top-full left-0 w-full bg-primary-black-200 rounded shadow-md mt-2 z-[999] max-h-[300px] overflow-y-auto">
                {cryptoSearch.loading ?
                    <li className='flex items-center justify-center gap-4 py-3 hover:bg-primary-black-300'>
                        <Loading />
                        Loading...
                    </li>
                    :
                    cryptoSearch.error ?
                        <li className='flex items-center justify-center gap-4 py-3 hover:bg-primary-black-300'>
                            Data not found
                        </li>
                        :
                        coins.map((coin) => (
                            <li key={coin.uuid} className='px-4 py-3 cursor-pointer border-b border-b-primary-black transition-all duration-200 hover:bg-primary-black-300'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-6 h-6' src={coin.iconUrl} alt={coin.name} />
                                    {coin.name} - ({coin.symbol})
                                </div>
                            </li>
                        ))}
            </ul>
            }
        </div>
    )
}

export default SearchInput