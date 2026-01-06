import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="py-32 px-4 bg-background border-t border-border">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Ready to make your way?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Whether you need AX consulting, a custom AI solution, or an FDE team, we are here to help.
                    </p>

                    <Link href="mailto:waymakerlabs@gmail.com">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full group">
                            <Mail className="mr-2 h-5 w-5" />
                            waymakerlabs@gmail.com
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </ScrollReveal>

                <div className="pt-24 text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} WayMaker. All rights reserved.
                </div>
            </div>
        </section>
    )
}
