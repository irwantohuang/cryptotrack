import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "../elements/Button"
import { useEffect, useRef, useState } from "react"

interface CategoryProps {
    categories: string[],
    selected: string,
    onSelect: (e: string) => void
}

const CoinCategory = ({ categories, selected, onSelect }: CategoryProps) => {

    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [translate, setTranslate] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction: string) => {
        if (direction === 'previous') {
            setTranslate(translate => {
                const newTranslate = translate - 200;
                if (newTranslate <= 0) return 0;
                return newTranslate;
            })
        } else {
            setTranslate(translate => {
                if (sectionRef.current === null) return translate;

                const newTranslate = translate + 200;
                const edge = sectionRef.current.scrollWidth;
                const width = sectionRef.current.clientWidth;

                if (newTranslate + width >= edge) return edge - width;
                return newTranslate;
            })
        }
    }

    useEffect(() => {
        if (sectionRef.current == null) return;

        const observer = new ResizeObserver(entires => {
            const container = entires[0]?.target;
            if (container == null) return;

            console.log("Container Width ", container.clientWidth)
            console.log("Container Width ", container.scrollWidth)

            setShowPreviousButton(translate > 0);
            setShowNextButton(translate + container.clientWidth < container.scrollWidth)
        })
        observer.observe(sectionRef.current)

        return () => observer.disconnect();
    }, [categories, translate])


    return (
        <section className="coin-category h-14 flex items-center overflow-hidden z-10 w-full">
            <div ref={sectionRef} className="overflow-hidden relative">
                <div className="flex whitespace-nowrap transition-transform w-[max-content] gap-3" style={{ transform: `translateX(-${translate}px)` }}>
                    {categories.map((category, index) => (
                        <div key={category} data-aos="fade-left" data-aos-delay={index * 100}>
                            <Button onClick={() => onSelect(category)} className={`px-4 py-2 text-sm md:text-base rounded-md font-semibold ${selected === category ? 'bg-accent' : 'bg-primary'}`} style={{ opacity: 1 }}>
                                {category}
                            </Button>
                        </div>
                    ))}
                </div>

                {showPreviousButton && <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-black from-30% to-transparent w-24 h-full flex items-center">
                    <Button data-aos="fade-right" variant={"ghost"} size={"icon"} className="h-full aspect-square w-auto focus:ring-0 p-1" onClick={() => handleClick("previous")}>
                        <ChevronLeft />
                    </Button>
                </div>}

                {showNextButton && <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-primary-black from-30% to-transparent w-24 h-full flex items-center justify-end">
                    <Button data-aos="fade-left" variant={"ghost"} size={"icon"} className="h-full aspect-square w-auto focus:ring-0 p-1" onClick={() => handleClick("next")}>
                        <ChevronRight />
                    </Button>
                </div>}
            </div>
        </section>
    )
}

export default CoinCategory