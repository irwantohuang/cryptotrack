import CryptoPage from "../pages/CryptoPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/cryptocurrencies", element: <CryptoPage /> },
    { path: "/about", element: <NotFoundPage /> }
]