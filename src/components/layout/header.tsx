"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent py-4"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                    {/* Light mode logo */}
                    <Image
                        src="/images/waymaker_logo_no_text.svg"
                        alt="WayMaker"
                        width={36}
                        height={36}
                        className="h-8 w-auto dark:hidden"
                        priority
                    />
                    {/* Dark mode logo (inverted) */}
                    <Image
                        src="/images/waymaker_no_text_inverted.svg"
                        alt="WayMaker"
                        width={36}
                        height={36}
                        className="h-8 w-auto hidden dark:block"
                        priority
                    />
                    <span className="text-lg font-bold tracking-tight">WayMaker</span>
                </Link>
                <nav className="flex items-center gap-4">
                    <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                        Services
                    </Link>
                    <Link href="#contact">
                        <Button size="sm" variant={scrolled ? "default" : "outline"} className="rounded-full">
                            Contact
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
