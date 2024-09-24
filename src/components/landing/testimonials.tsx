'use client'

import { TESTIMONIALS } from '@/constants/testimonials'
import { useState } from 'react'
import BackdropGradient from '../backdrop-gradient'
import GradientText from '../gradient-text'
import { TestimonialCard } from './testimonial-card'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }

    return (
        <section id="testimonials" className="flex w-full flex-col items-center gap-12 py-20">
            <BackdropGradient className="flex h-full w-full flex-col items-center opacity-40 md:w-8/12">
                <GradientText
                    className="text-center text-3xl font-semibold md:text-4xl"
                    element="H2"
                >
                    What Our Users Say
                </GradientText>
            </BackdropGradient>

            <div className="relative w-full max-w-[800px]">
                <TestimonialCard {...TESTIMONIALS[currentIndex]} />
                <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-themeTextWhite"
                >
                    &lt;
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-themeTextWhite"
                >
                    &gt;
                </button>
            </div>

            <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${
                            index === currentIndex ? 'bg-themeTextWhite' : 'bg-themeTextGray'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
