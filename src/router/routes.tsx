import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <NotFoundPage /> }
]