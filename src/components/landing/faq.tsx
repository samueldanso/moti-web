'use client'

import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-themeGray/20 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-themeTextWhite">{question}</h3>
                <ChevronDownIcon
                    className={`w-5 h-5 text-themeTextGray transition-transform ${
                        isOpen ? 'transform rotate-180' : ''
                    }`}
                />
            </button>
            {isOpen && <p className="mt-2 text-themeTextGray">{answer}</p>}
        </div>
    )
}

export default function FAQ() {
    return (
        <section id="faq" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-themeTextWhite animate-fade-in">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto bg-themeGray/20 backdrop-blur-lg rounded-lg p-6 border border-themeGray/30 hover:shadow-lg hover:shadow-themeGray/50 transition-all duration-300">
                <FAQItem
                    question="How does EmotiSync work?"
                    answer="EmotiSync uses AI to analyze your mood and provide personalized audio content recommendations to enhance your emotional well-being."
                />
                <FAQItem
                    question="Is my data safe and private?"
                    answer="Yes, we take your privacy seriously. All your data is encrypted and never shared with third parties."
                />
                <FAQItem
                    question="Can I use EmotiSync offline?"
                    answer="While some features require an internet connection, you can download content for offline use."
                />
                <FAQItem
                    question="Is there a free trial available?"
                    answer="Yes, we offer a 14-day free trial so you can experience the full benefits of EmotiSync before committing."
                />
            </div>
        </section>
    )
}
