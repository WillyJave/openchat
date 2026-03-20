'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

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

        <Button onClick={scrollToForm} size="sm">
          Diagnóstico gratis
        </Button>
      </div>
    </header>
  )
}
