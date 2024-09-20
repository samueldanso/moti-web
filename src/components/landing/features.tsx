import { BarChartIcon, HeadphonesIcon, SmileIcon } from 'lucide-react'

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="p-6 rounded-lg text-center bg-themeGray/20 backdrop-blur-lg border border-themeGray/30 hover:shadow-lg hover:shadow-themeGray/50 transition-all duration-300">
            <div className="flex justify-center mb-4 text-themeTextWhite">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-themeTextWhite">{title}</h3>
            <p className="text-themeTextGray">{description}</p>
        </div>
    )
}

export default function Features() {
    return (
        <section id="features" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-themeTextWhite animate-fade-in">
                Why Choose EmotiSync?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<HeadphonesIcon className="h-12 w-12" />}
                    title="Personalized Audio"
                    description="Tailored content that adapts to your unique emotional state."
                />
                <FeatureCard
                    icon={<SmileIcon className="h-12 w-12" />}
                    title="Mood Enhancement"
                    description="Scientifically designed audio to uplift and balance your emotions."
                />
                <FeatureCard
                    icon={<BarChartIcon className="h-12 w-12" />}
                    title="Track Your Progress"
                    description="Monitor your emotional well-being over time with intuitive insights."
                />
            </div>
        </section>
    )
}
