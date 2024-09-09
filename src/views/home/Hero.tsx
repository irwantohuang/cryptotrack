import Button from "../../components/elements/Button"
import HeroChain from '../../assets/images/hero-side-bg.png';

const Hero = () => {
    return (
        <section className="hero-section flex w-full  justify-center h-screen bg-hero-bg-gradient bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto h-full lg:pt-[100px]">
                <div className="flex flex-col items-start justify-center md:pt-32 lg:pt-0 h-full lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-4xl mx-auto text-center lg:text-start">
                        <h1
                            data-aos="fade-right"
                            className="text-5xl lg:text-7xl font-semibold first-letter:text-[100px] lg:first-letter:text-[120px] font-secondary">Discover the Future
                            of <span className="bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-transparent text-8xl lg:text-[120px] font-bold">Crypto</span>
                        </h1>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="800"
                            className="rounded bg-primary-black/50 mt-8 py-6 px-4 max-w-lg md:max-w-xl mx-auto lg:mx-0 overflow-hidden">
                            <p data-aos="fade-right" data-aos-delay="100" className="text-xl font-medium text-primary-white-200">Explore the top-ranking cryptocurrencies, latest news, and more. Stay ahead in the world of digital finance.</p>
                            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap mt-4 z-10">
                                <Button data-aos="fade-up" data-aos-delay="200" className="text-lg font-semibold" size={"pill"}>Start exploring</Button>
                                <Button data-aos="fade-up" data-aos-delay="300" className="text-lg font-semibold" variant={"outline"} size={"pill"}>Learn About Crypto</Button>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto hidden md:block">
                        <img src={HeroChain} alt="BlockChain" className="md:max-w-[200px] max-w-sm lg:max-w-lg opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero