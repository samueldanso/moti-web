'use client'

import { FAQ_ITEMS } from '@/constants/faq'
import BackdropGradient from '../backdrop-gradient'
import GradientText from '../gradient-text'
import { FAQItem } from './faq-item'

export default function FAQ() {
    return (
        <section id="faq" className="flex w-full flex-col items-center gap-12 py-20">
            <BackdropGradient className="flex h-full w-full flex-col items-center opacity-40 md:w-8/12">
                <GradientText
                    className="text-center text-3xl font-semibold md:text-4xl"
                    element="H2"
                >
                    Frequently Asked Questions
                </GradientText>
            </BackdropGradient>

            <div className="w-full max-w-3xl space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    )
}
