"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 0.5
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
