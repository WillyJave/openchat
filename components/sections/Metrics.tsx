'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  {
    value: 500,
    suffix: '+',
    label: 'Negocios activos',
    description: 'Empresas usando OpenChat diariamente',
  },
  {
    value: 2,
    suffix: 'M+',
    label: 'Mensajes procesados',
    description: 'Conversaciones automatizadas al mes',
  },
  {
    value: 3,
    suffix: 'x',
    label: 'Más conversiones',
    description: 'Incremento promedio en ventas',
  },
  {
    value: 70,
    suffix: '%',
    label: 'Menos tiempo',
    description: 'Reducción en tiempo de respuesta',
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Metrics() {
  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[128px] opacity-50" />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-h2 mb-4">
            Resultados que{' '}
            <span className="text-accent">hablan solos</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Números reales de negocios como el tuyo que ya usan OpenChat
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center p-6 rounded-2xl bg-background-elevated border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <blockquote className="text-xl sm:text-2xl text-white/90 italic mb-6">
            "Pasamos de perder el 40% de leads a cerrar el 80% de las conversaciones.
            OpenChat transformó completamente nuestro proceso de ventas."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
              MR
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">María Rodríguez</div>
              <div className="text-sm text-muted">CEO, TiendaFashion.com</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
