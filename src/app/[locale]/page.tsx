import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <Hero />
            <About />
            <Services />
            <Process />
            <Stats />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    )
}
