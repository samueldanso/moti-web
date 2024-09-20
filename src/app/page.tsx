import FAQ from '@/components/landing/faq'
import Features from '@/components/landing/features'
import Footer from '@/components/landing/footer'
import HeroSection from '@/components/landing/hero'
import HowItWorks from '@/components/landing/how-it-works'
import NavBar from '@/components/landing/navbar'
import Testimonials from '@/components/landing/testimonials'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-themeBlack to-themeDarkGray">
            <NavBar />

            <HeroSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />

            <Footer />
        </main>
    )
}
