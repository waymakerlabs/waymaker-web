import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <Hero />
            <Services />
            <Contact />
            <Footer />
        </main>
    )
}
