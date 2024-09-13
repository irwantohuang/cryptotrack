import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
    children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="header p-4 fixed bottom-0 md:top-0 md:bottom-auto left-0  w-full z-[999]">
            <div className="container mx-auto">
                <div className="flex items-center justify-center md:justify-between bg-white px-8 py-3 rounded backdrop-filter backdrop-blur-lg bg-opacity-50 shadow">
                    {/* <h1 className="hidden md:inline-block text-lg first-letter:text-3xl first-letter:font-bold font-semibold text-primary-black">
                        Crypto
                        <p className="inline-block first-letter:text-2xl first-letter:font-bold">Track</p>
                    </h1> */}
                    
                    <Link to="/" className="text-primary-black font-bold text-2xl lowercase transition-all duration-200 hover:text-accent-200">cryptotrack.</Link>

                    {/* Navbar */}
                    {children}
                </div>


            </div>
        </header>
    )
}

export default Header