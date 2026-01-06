"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Monitor, Cpu, Users, Layers, Zap, LucideIcon } from "lucide-react"

type ServiceKey = 'axConsulting' | 'aiApps' | 'fde' | 'custom' | 'appDev'

const serviceConfig: { key: ServiceKey; icon: LucideIcon }[] = [
    { key: 'axConsulting', icon: Monitor },
    { key: 'aiApps', icon: Zap },
    { key: 'fde', icon: Users },
    { key: 'custom', icon: Cpu },
    { key: 'appDev', icon: Layers }
]

export function Services() {
    const t = useTranslations('services')

    return (
        <section id="services" className="py-24 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto space-y-32">
                {serviceConfig.map((service, index) => (
                    <ScrollReveal key={index} className="flex flex-col md:flex-row items-start gap-8 md:gap-16 group">
                        <div className="flex-shrink-0 pt-2">
                            <div className="p-4 rounded-2xl bg-secondary group-hover:bg-primary transition-colors duration-500">
                                <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                                {t(`${service.key}.title`)}
                            </h3>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {t(`${service.key}.description`)}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
