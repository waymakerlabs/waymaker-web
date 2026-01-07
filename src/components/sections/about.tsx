"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Lightbulb, Zap, Handshake } from "lucide-react"

const valueIcons = {
    innovation: Lightbulb,
    execution: Zap,
    partnership: Handshake,
}

export function About() {
    const t = useTranslations('about')

    const values = ['innovation', 'execution', 'partnership'] as const

    return (
        <section id="about" className="py-24 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                        {t('badge')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        {t('heading')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {values.map((value, index) => {
                        const Icon = valueIcons[value]
                        return (
                            <ScrollReveal
                                key={value}
                                className="group p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                                delay={index * 0.1}
                            >
                                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {t(`values.${value}.title`)}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(`values.${value}.description`)}
                                </p>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
