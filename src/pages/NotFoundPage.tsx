import { Link } from "react-router-dom"
import Button from "../components/elements/Button"

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-screen-md mx-auto py-12 text-center rounded border border-primary-black-300">
                <h1 className="text-3xl font-semibold text-red-500">404 Not Found Page</h1>

                <p className="text-lg mt-4 mb-1 text-primary-white-300 font-medium">Oops! The page you're looking for cannot be found.</p>
                <p className="text-primary-white-200/75">It might have been removed, had its name changed, or is temporarily unavailable.</p>

                <div className="mt-6 w-full flex items-center justify-center">
                    <Link to="/">
                        <Button className="bg-red-500 text-red-100 hover:bg-red-400 px-4 rounded-sm">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage