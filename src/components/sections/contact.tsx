"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Send, Loader2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const t = useTranslations('contact')
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                const data = await res.json()
                setErrorMessage(data.error || t('form.error'))
                setStatus('error')
            }
        } catch {
            setErrorMessage(t('form.error'))
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-32 px-4 bg-background border-t border-border">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        {t('heading')}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        {t('subheading')}
                    </p>

                    {status === 'success' ? (
                        <div className="p-8 rounded-2xl bg-primary/10 text-primary">
                            <p className="text-lg font-medium">{t('form.success')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    {t('form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    placeholder={t('form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    {t('form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    placeholder={t('form.emailPlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {t('form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                                    placeholder={t('form.messagePlaceholder')}
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm">{errorMessage}</p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-12 sm:h-14 text-base rounded-full"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <Send className="mr-2 h-5 w-5" />
                                )}
                                {status === 'loading' ? t('form.sending') : t('form.submit')}
                            </Button>
                        </form>
                    )}
                </ScrollReveal>
            </div>
        </section>
    )
}
