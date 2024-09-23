import FAQ from '@/components/landing/faq'
import Features from '@/components/landing/features'
import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import HeroSection from '@/components/landing/hero'
import HowItWorks from '@/components/landing/how-it-works'
import Testimonials from '@/components/landing/testimonials'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-themeBlack to-themeDarkGray ">
            <Header />

            <HeroSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />

            <p>hi </p>

            <Footer />
        </main>
    )
}
