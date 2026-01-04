import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'new'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        {
          'bg-white/10 text-white': variant === 'default',
          'bg-accent/20 text-accent': variant === 'accent',
          'bg-accent text-background': variant === 'new',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
