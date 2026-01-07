"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ() {
    const t = useTranslations('faq')
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const items = [0, 1, 2, 3, 4]

    return (
        <section className="py-24 px-4 bg-muted/30">
            <div className="max-w-3xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        {t('sectionTitle')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {t('sectionSubtitle')}
                    </p>
                </ScrollReveal>

                <div className="space-y-4">
                    {items.map((index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className="rounded-xl border border-border bg-background overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <span className="font-medium pr-4">
                                        {t(`items.${index}.question`)}
                                    </span>
                                    <ChevronDown
                                        className={cn(
                                            "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                                            openIndex === index && "rotate-180"
                                        )}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        "grid transition-all duration-200",
                                        openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                                            {t(`items.${index}.answer`)}
                                        </p>
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
