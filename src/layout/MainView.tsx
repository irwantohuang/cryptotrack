import { Route, Routes } from "react-router-dom"
import { routes } from "../router/routes"
import ScrollToTop from "../components/ScrollToTop"

const MainView = () => {
    return (
        <main className="main-view flex-grow">
            <ScrollToTop />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </main>
    )
}

export default MainView