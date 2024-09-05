import Hero from "../views/home/Hero"
import Overview from "../views/home/Overview"
import TopCoins from "../views/home/TopCoins"

const HomePage = () => {
    return (
        <div className="w-full h-auto overflow-x-hidden">
            <Hero />
            <Overview />
            <TopCoins />
        </div>
    )
}

export default HomePage