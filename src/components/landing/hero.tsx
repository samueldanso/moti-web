import { Button } from '@/components/ui/button'

import Link from 'next/link'
import GradientText from '../gradient-text'
import DashboardSnippet from './dashboard-snippet'

export default function HeroSection() {
    return (
        <section className="container mx-auto flex flex-col items-center overflow-hidden px-4 py-20">
            <span className="mb-3 rounded-full border px-4 py-2 text-sm">
                Built on <span className="text-yellow-300">CapX</span>
            </span>

            <GradientText
                className="mb-2 max-w-4xl text-center text-[40px] font-semibold leading-tight md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px]"
                element="H1"
            >
                Your mood <br className="md:hidden" /> companion
            </GradientText>

            <p className="mb-8 max-w-2xl text-left text-base text-muted-foreground md:text-center">
                Analyzes your mood, recommends personalized audio to enhance it,
                <br className="hidden md:block" /> and lets you share your feelings with friends
            </p>

            <div className="flex w-full justify-center">
                <Link href="/sign-up" className="flex w-full justify-center md:w-auto">
                    <Button className="bg-purple-300 text-base">Try EmotiSync for free</Button>
                </Link>
            </div>

            <DashboardSnippet />
        </section>
    )
}
