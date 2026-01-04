import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full rounded-xl bg-background-elevated border border-white/10',
            'px-4 py-4 text-white placeholder:text-muted',
            'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30',
            'transition-all duration-200',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, placeholder, ...props }, ref) => {
    return (
      <div className="w-full">
        <select
          ref={ref}
          className={cn(
            'w-full rounded-xl bg-background-elevated border border-white/10',
            'px-4 py-4 text-white',
            'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30',
            'transition-all duration-200',
            'appearance-none cursor-pointer',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-muted">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-background-elevated">
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Input, Select }
