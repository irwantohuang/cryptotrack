import { Route, Routes } from "react-router-dom"
import { routes } from "../router/routes"

const MainView = () => {
    return (
        <main className="main-view flex-grow">
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </main>
    )
}

export default MainView