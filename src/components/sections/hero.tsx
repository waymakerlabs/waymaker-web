"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    const t = useTranslations('hero')

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

            <ScrollReveal className="w-full max-w-4xl mx-auto space-y-8">
                {/* Hero Logo */}
                <div className="flex justify-center mb-4">
                    {/* Light mode logo */}
                    <Image
                        src="/images/waymaker_logo_no_text.svg"
                        alt="WayMaker Logo"
                        width={180}
                        height={195}
                        className="h-32 md:h-44 w-auto dark:hidden"
                        priority
                    />
                    {/* Dark mode logo (inverted) */}
                    <Image
                        src="/images/waymaker_no_text_inverted.svg"
                        alt="WayMaker Logo"
                        width={180}
                        height={195}
                        className="h-32 md:h-44 w-auto hidden dark:block"
                        priority
                    />
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                    WayMaker
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t('tagline')}
                    <br />
                    {t('subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Link href="#services">
                        <Button size="lg" className="h-12 px-8 text-base rounded-full">
                            {t('exploreButton')}
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full">
                            {t('contactButton')}
                        </Button>
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    )
}
