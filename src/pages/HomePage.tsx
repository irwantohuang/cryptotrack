import Hero from "../views/home/Hero"
import Overview from "../views/home/Overview"

const HomePage = () => {
    return (
        <div className="w-full h-auto overflow-x-hidden">
            <Hero />
            <Overview />
        </div>
    )
}

export default HomePage