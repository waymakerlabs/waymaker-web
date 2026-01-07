"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Globe } from "lucide-react"
import { Button } from "./button"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const locales = ['en', 'ko'] as const

export function LanguageSelector() {
    const locale = useLocale()
    const t = useTranslations('language')
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9"
                aria-label="Select language"
            >
                <Globe className="h-5 w-5" />
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 py-1 w-32 bg-background border rounded-lg shadow-lg z-50">
                    {locales.map((loc) => (
                        <Link
                            key={loc}
                            href="/"
                            locale={loc}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "block w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors",
                                locale === loc && "font-semibold text-primary"
                            )}
                        >
                            {t(loc)}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
