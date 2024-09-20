function StepCard({
    number,
    title,
    description,
}: {
    number: string
    title: string
    description: string
}) {
    return (
        <div className="p-6 rounded-lg text-center bg-themeGray/20 backdrop-blur-lg border border-themeGray/30 hover:shadow-lg hover:shadow-themeGray/50 transition-all duration-300">
            <div className="text-3xl font-bold mb-4 text-themeTextWhite">{number}</div>
            <h3 className="text-xl font-semibold mb-2 text-themeTextWhite">{title}</h3>
            <p className="text-themeTextGray">{description}</p>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-themeTextWhite animate-fade-in">
                How EmotiSync Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <StepCard
                    number="1"
                    title="Share Your Mood"
                    description="Tell us how you're feeling with our quick and easy mood check-in."
                />
                <StepCard
                    number="2"
                    title="AI Analysis"
                    description="Our AI analyzes your emotional state and preferences."
                />
                <StepCard
                    number="3"
                    title="Personalized Recommendations"
                    description="Receive tailored audio content to enhance your mood instantly."
                />
            </div>
        </section>
    )
}
