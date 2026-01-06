import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

            <ScrollReveal className="w-full max-w-4xl mx-auto space-y-8">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                    WayMaker
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We construct the future with AX Consulting and AI Solutions.
                    <br />
                    Transforming problems into pathways.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Link href="#services">
                        <Button size="lg" className="h-12 px-8 text-base rounded-full">
                            Explore Solutions
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    )
}
