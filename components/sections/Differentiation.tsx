'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function Differentiation() {
  const { t } = useLanguage()
  const d = t.differentiation

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
            {d.title1}{' '}
            <span className="text-accent">{d.titleHighlight}</span>{' '}
            {d.title2}
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">{d.subtitle}</p>
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
                <span className="text-muted text-sm">{d.colFeature}</span>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <span className="text-accent font-semibold">OpenChat</span>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <span className="text-muted text-sm">{d.colOthers}</span>
              </div>
            </div>

            {/* Rows */}
            {d.items.map((row, index) => (
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
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/10">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
