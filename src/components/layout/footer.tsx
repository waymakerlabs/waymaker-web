"use client"

import { useTranslations } from "next-intl"
import packageJson from "../../../package.json"

export function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className="border-t py-8">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
                <p>v{packageJson.version}</p>
            </div>
        </footer>
    )
}
