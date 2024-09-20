import Image from 'next/image'
import { Button } from '../ui/button'

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 pt-32 pb-20 overflow-hidden">
            <div className="flex items-center justify-center flex-col mt-[30px] gap-6">
                <span className="text-themeTextWhite bg-themeGray/20 px-4 py-2 rounded-full text-sm border border-themeGray/30">
                    Powered by Capx AI
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight text-themeTextWhite">
                    Your AI friend for <br />
                    emotional well-being
                </h1>

                <p className="text-center max-w-[500px] text-base md:text-lg lg:text-lg text-themeTextGray">
                    Analyzes your mood, recommends personalized audio to enhance it, and lets you
                    share your feelings with friends
                </p>
                <Button
                    size="lg"
                    className="bg-themeGray text-themeTextWhite font-bold mb-12 hover:bg-themeDarkGray transition-colors"
                >
                    Try it for free
                </Button>
                <div className="relative">
                    <Image
                        src="/images/iphonecorinna.png"
                        width={400}
                        height={100}
                        alt="iPhone with EmotiSync app"
                        className="max-w-lg object-contain -mb-20"
                    />
                </div>
            </div>
        </section>
    )
}
