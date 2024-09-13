import CryptoDetailPage from "../pages/CryptoDetailPage";
import CryptoPage from "../pages/CryptoPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/cryptocurrencies", element: <CryptoPage /> },
    { path: "/cryptocurrencies/:id", element: <CryptoDetailPage /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/news", element: <NewsPage /> },
]