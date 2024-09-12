import { useState } from 'react'
import Button from '../../components/elements/Button'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/faqs';

const Faq = () => {
    const [showAnswer, setShowAnswer] = useState<number | null>(null);

    const toggleAnswer = (id: number) => {
        setShowAnswer(e => e === id ? null : id);
    }

    return (
        <>
            <div className="container mx-auto h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-accent to-primary"></div>
            <section id="faq" className='w-full h-full py-20'>
                <div className='container mx-auto p-4'>
                    <p data-aos="fade-down" className="text-center text-5xl font-semibold text-primary-300">Frequently Asked Questions</p>

                    <div className='flex flex-col max-w-screen-md mx-auto mt-8 cursor-pointer'>

                        {faqs.map((faq) => (
                            <div 
                                data-aos="fade-up"
                                data-aos-delay={faq.id * 100}
                                key={faq.id} 
                                onClick={() => toggleAnswer(faq.id)} 
                                className='border-b py-6 px-2 group'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl font-medium transition-colors duration-300 group-hover:text-accent'>
                                        <span className='text-2xl font-bold mr-2'>Q{faq.id}.</span>
                                        {faq.question}
                                    </p>
                                    <Button variant={"ghost"}>
                                        <ChevronDown className={`transition-transform duration-300 ${showAnswer === faq.id ? 'rotate-180' : ''}`}/>
                                    </Button>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showAnswer === faq.id ? 'max-h-56' : 'max-h-0'}`}>
                                    <p className='mt-2 text-primary-white-200 text-lg'>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
