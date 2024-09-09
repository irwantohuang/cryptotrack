import { ReactNode } from "react"
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="main-layout relative w-full min-h-screen h-full flex flex-col overflow-x-hidden">
            <Header>
                <Navbar />
            </Header>

            {children}

            <Footer />
        </main>
    )
}

export default MainLayout