'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage, languages, Language } from '@/lib/i18n'
import { ChevronDown, Globe } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const currentLang = languages.find((l) => l.code === language)!

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-white.svg"
            alt="OpenChat Logo"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen((v) => !v)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                'text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10',
                isLangOpen && 'bg-white/10 border-white/10 text-white'
              )}
              aria-label="Select language"
              id="lang-selector-btn"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <span className="sm:hidden">{currentLang.flag}</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  isLangOpen && 'rotate-180'
                )}
              />
            </button>

            {/* Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/10 bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language)
                      setIsLangOpen(false)
                    }}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150',
                      lang.code === language
                        ? 'bg-accent/20 text-accent font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                    id={`lang-option-${lang.code}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.label}</span>
                    {lang.code === language && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login button */}
          <a
            href="https://app.openchat.lat/en/login"
            target="_blank"
            rel="noopener noreferrer"
            id="header-login-btn"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            {t.header.login}
          </a>

          <Button onClick={scrollToForm} size="sm" id="header-cta-btn">
            {t.header.cta}
          </Button>
        </div>

      </div>
    </header>
  )
}
