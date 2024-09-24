import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
    children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="header p-4 fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full z-[999]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center md:justify-between bg-gradient-to-r from-primary-black/50 via-primary-black-300/50 to-primary-black/50 px-8 py-3 rounded backdrop-filter backdrop-blur-lg bg-opacity-50 shadow">
                    <Link to="/" className="text-primary-white hover:text-primary-white-200 hidden md:inline-block font-bold text-2xl lowercase transition-all duration-200">cryptotrack.</Link>

                    {/* Navbar */}
                    {children}
                </div>


            </div>
        </header>
    )
}

export default Header