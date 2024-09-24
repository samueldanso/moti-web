'use client'

import { Card, CardContent } from '@/components/ui/card'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

type FAQItemProps = {
    question: string
    answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card className="w-full border-themeGray bg-themeGray bg-opacity-40 backdrop-blur-lg">
            <CardContent className="p-4">
                <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-lg font-semibold text-themeTextWhite">{question}</span>
                    {isOpen ? (
                        <MinusIcon className="h-5 w-5 text-themeTextWhite" />
                    ) : (
                        <PlusIcon className="h-5 w-5 text-themeTextWhite" />
                    )}
                </button>
                {isOpen && <p className="mt-2 text-themeTextGray">{answer}</p>}
            </CardContent>
        </Card>
    )
}
