"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { MessageSquare, Search, Code2, Rocket } from "lucide-react"

const stepIcons = {
    discovery: MessageSquare,
    analysis: Search,
    development: Code2,
    support: Rocket,
}

const steps = ['discovery', 'analysis', 'development', 'support'] as const

export function Process() {
    const t = useTranslations('process')

    return (
        <section id="process" className="py-24 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        {t('sectionTitle')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {t('sectionSubtitle')}
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, index) => {
                            const Icon = stepIcons[step]
                            const isEven = index % 2 === 0

                            return (
                                <ScrollReveal
                                    key={step}
                                    className={`relative md:flex md:items-center md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    delay={index * 0.15}
                                >
                                    {/* Content */}
                                    <div className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        <div className={`p-6 rounded-2xl bg-background border border-border shadow-sm ${isEven ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                <div className="p-3 rounded-xl bg-primary/10">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <span className="text-sm font-medium text-primary">
                                                        {t(`steps.${step}.step`)}
                                                    </span>
                                                    <h3 className="text-xl font-semibold">
                                                        {t(`steps.${step}.title`)}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className={`text-muted-foreground leading-relaxed ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                                {t(`steps.${step}.description`)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                    {/* Spacer for alternating layout */}
                                    <div className="md:w-1/2" />
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
