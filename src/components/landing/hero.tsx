import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GradientText from '../gradient-text'
import AppPreview from './app-preview'

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-y-5 md:gap-y-0 container mx-auto px-4 pt-32 pb-20 overflow-hidden">
            <span className="px-4 py-2 rounded-full text-sm border">Built on Capx AI</span>

            <GradientText
                className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold text-center max-w-4xl"
                element="H1"
            >
                Your AI friend for <br className="md:hidden" /> emotional well-being
            </GradientText>

            <p className="text-sm md:text-center text-left text-muted-foreground">
                Analyzes your mood, recommends personalized audio to enhance it,
                <br className="hidden md:block" /> and lets you share your feelings with friends
            </p>

            <div className="flex md:flex-row flex-col md:justify-center md:mt-5 w-full">
                <Link href="/sign-in">
                    <Button className="text-base flex w-full">Try EmotiSync for free</Button>
                </Link>
            </div>

            <AppPreview />
        </section>
    )
}
