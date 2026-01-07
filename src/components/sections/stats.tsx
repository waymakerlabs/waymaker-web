"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const statKeys = ['projects', 'satisfaction', 'response', 'technologies'] as const

export function Stats() {
    const t = useTranslations('stats')

    return (
        <section className="py-20 px-4 bg-primary text-primary-foreground">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {statKeys.map((key, index) => (
                            <div key={key} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    {t(`${key}.value`)}
                                </div>
                                <div className="text-sm md:text-base opacity-80">
                                    {t(`${key}.label`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
