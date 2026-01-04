'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-background-elevated p-6',
        'transition-all duration-300',
        'hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5',
        'group',
        glow && 'relative overflow-hidden',
        className
      )}
    >
      {glow && (
        <div className="absolute inset-0 bg-glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

interface CardIconProps {
  children: React.ReactNode
  className?: string
}

export function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4',
        'group-hover:bg-accent/20 transition-colors duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-h3 text-white mb-2', className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-body-sm', className)}>{children}</p>
}
