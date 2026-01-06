import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Monitor, Cpu, Users, Layers, Zap } from "lucide-react"

const services = [
    {
        icon: Monitor,
        title: "AX Consulting",
        description: "App Experience Consulting. We dissect user interactions to build intuitive, engaging, and high-conversion digital experiences."
    },
    {
        icon: Zap,
        title: "AI Disposable Apps",
        description: "Rapid AI prototyping. We build focused, lightweight AI applications designed to solve specific problems instantly."
    },
    {
        icon: Users,
        title: "FDE Solutions",
        description: "Forward Deployed Engineering. Like Palantir's FDEs, our engineers embed with your team to solve critical AX and data problems on the ground."
    },
    {
        icon: Cpu,
        title: "Custom Solutions",
        description: "Tailored software for enterprises and individuals. From internal tools to customer-facing platforms, we craft the perfect fit."
    },
    {
        icon: Layers,
        title: "App Development & Distribution",
        description: "End-to-end app lifecycle management. We build, deploy, and scale varied applications across global markets."
    }
]

export function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto space-y-32">
                {services.map((service, index) => (
                    <ScrollReveal key={index} className="flex flex-col md:flex-row items-start gap-8 md:gap-16 group">
                        <div className="flex-shrink-0 pt-2">
                            <div className="p-4 rounded-2xl bg-secondary group-hover:bg-primary transition-colors duration-500">
                                <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{service.title}</h3>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
