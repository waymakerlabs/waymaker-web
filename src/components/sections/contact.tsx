"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
    const t = useTranslations('contact')

    return (
        <section id="contact" className="py-32 px-4 bg-background border-t border-border">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        {t('heading')}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        {t('subheading')}
                    </p>

                    <Link href="mailto:waymakerlabs@gmail.com">
                        <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg rounded-full group">
                            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="hidden sm:inline">waymakerlabs@gmail.com</span>
                            <span className="sm:hidden">{t('buttonMobile')}</span>
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    )
}
