import { Route, Routes } from "react-router-dom"
import { routes } from "./router/routes"
import Navbar from "./Navbar"

function App() {

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col gap-2 text-primary-white">
            <h1 className="text-5xl font-bold font-primary text-primary-white">Test Checkout Branch</h1>
            <Navbar />

            <main>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </main>
        </div>
    )
}

export default App
