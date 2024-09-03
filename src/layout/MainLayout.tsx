import { ReactNode } from "react"
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="main-layout w-full overflow-x-hidden">
            <Header>
                <Navbar />
            </Header>

            {children}
        </main>
    )
}

export default MainLayout