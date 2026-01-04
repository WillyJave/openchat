'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisons = [
  {
    feature: 'Múltiples agentes simultáneos',
    openchat: true,
    others: false,
  },
  {
    feature: 'Diseñado nativo para WhatsApp',
    openchat: true,
    others: false,
  },
  {
    feature: 'Especializado en ecommerce',
    openchat: true,
    others: false,
  },
  {
    feature: 'Implementación en 48 horas',
    openchat: true,
    others: false,
  },
  {
    feature: 'Sin contratos largos',
    openchat: true,
    others: false,
  },
  {
    feature: 'Soporte en español 24/7',
    openchat: true,
    others: false,
  },
]

export function Differentiation() {
  return (
    <section className="py-24 relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-h2 mb-4">
            ¿Por qué{' '}
            <span className="text-accent">OpenChat</span>{' '}
            y no otra solución?
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            No somos un chatbot genérico. Somos una plataforma de ventas diseñada
            específicamente para ecommerce en LATAM.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-background-elevated border-b border-white/10">
              <div className="p-4 text-left">
                <span className="text-muted text-sm">Característica</span>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <span className="text-accent font-semibold">OpenChat</span>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <span className="text-muted text-sm">Otros</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.feature}
                className="grid grid-cols-3 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-4 flex items-center">
                  <span className="text-white text-sm">{row.feature}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10">
                  {row.openchat ? (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10">
                  {row.others ? (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
