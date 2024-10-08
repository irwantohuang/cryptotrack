
const Overview = () => {
    return (
        <section className="w-full bg-gradient-to-r from-primary-black via-primary/25 to-primary-black py-8 md:py-16">
            <div 
                data-aos="fade"
                data-aos-duration="1000"
                className="text-center text-xl md:text-2xl lg:text-3xl container px-2 md:max-w-4xl lg:max-w-6xl mx-auto font-secondary">
                <span  className="inline-block font-semibold first-letter:text-5xl bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-2xl md:text-3xl lg:text-4xl text-transparent">
                    Cryptocurrencies
                </span>
                <span
                    className="text-primary-white-200"> are decentralized digital assets that leverage blockchain technology to enable secure and transparent transactions. Learn how they are transforming the global financial landscape.</span>
            </div>
        </section>
    )
}

export default Overview