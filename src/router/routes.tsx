import CryptoDetailPage from "../pages/CryptoDetailPage";
import CryptoPage from "../pages/CryptoPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/cryptocurrencies", element: <CryptoPage /> },
    { path: "/cryptocurrencies/:id", element: <CryptoDetailPage /> },
    { path: "/about", element: <NotFoundPage /> },
]