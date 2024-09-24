import FAQ from '@/components/landing/faq'
import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import HeroSection from '@/components/landing/hero'
import HowItWorks from '@/components/landing/how-it-works'
import Testimonials from '@/components/landing/testimonials'

export default function Home() {
    return (
        <main className="container relative flex min-h-screen flex-col">
            <Header />
            <HeroSection />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    )
}
