import { HOW_IT_WORKS_STEPS } from '@/constants/how-it-works'
import BackdropGradient from '../backdrop-gradient'
import GradientText from '../gradient-text'
import StepCard from './step-card'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="flex w-full flex-col items-center gap-12 py-20">
            <BackdropGradient className="flex h-full w-full flex-col items-center opacity-40 md:w-8/12">
                <GradientText
                    className="text-center text-3xl font-semibold md:text-4xl"
                    element="H2"
                >
                    How EmotiSync Works
                </GradientText>
            </BackdropGradient>

            <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-6 md:px-0">
                {HOW_IT_WORKS_STEPS.map((step) => (
                    <StepCard key={step.number} {...step} />
                ))}
            </div>
        </section>
    )
}
