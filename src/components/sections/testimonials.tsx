"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Quote } from "lucide-react"

export function Testimonials() {
    const t = useTranslations('testimonials')

    // Get testimonials array from translations
    const items = [0, 1, 2]

    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        {t('sectionTitle')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {t('sectionSubtitle')}
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((index) => (
                        <ScrollReveal
                            key={index}
                            className="relative p-6 rounded-2xl bg-muted/30 border border-border"
                            delay={index * 0.1}
                        >
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-foreground leading-relaxed mb-6">
                                &ldquo;{t(`items.${index}.quote`)}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-sm font-medium text-primary">
                                        {t(`items.${index}.author`).charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-medium text-sm">
                                        {t(`items.${index}.author`)}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {t(`items.${index}.role`)}
                                        {t(`items.${index}.company`) && ` · ${t(`items.${index}.company`)}`}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
