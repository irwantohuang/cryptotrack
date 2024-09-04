import Hero from "../views/home/Hero"

const HomePage = () => {
    return (
        // <div className="flex w-full items-center justify-center h-screen bg-hero-bg-gradient bg-cover bg-no-repeat">
        //     <h1 >Home Page</h1>
        // </div>

        <div className="w-full h-auto overflow-x-hidden">
            <Hero />
        </div>
    )
}

export default HomePage