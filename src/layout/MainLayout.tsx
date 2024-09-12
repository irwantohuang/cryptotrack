import { ReactNode } from "react"
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const location = useLocation();

    const isDetailPage = location.pathname.startsWith("/cryptocurrencies/")

    return (
        <main className="main-layout relative w-full min-h-screen h-full flex flex-col overflow-x-hidden">
            {!isDetailPage && <Header>
                <Navbar />
            </Header>}

            {children}

            <Footer />
        </main>
    )
}

export default MainLayout