'use client'

import { motion } from 'framer-motion'
import { Card, CardIcon, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Brain, RefreshCw, LineChart } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const icons = [Zap, Brain, RefreshCw, LineChart]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Solution() {
  const { t } = useLanguage()
  const s = t.solution

  return (
    <section className="py-24 bg-background-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="new" className="mb-4">
            {s.badge}
          </Badge>
          <h2 className="text-h2 mb-4">
            {s.title1}{' '}
            <span className="text-accent">{s.titleHighlight}</span>{' '}
            {s.title2}
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">{s.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {s.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <Card glow className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <CardIcon>
                      <Icon className="w-6 h-6" />
                    </CardIcon>
                    <Badge variant="accent">{item.badge}</Badge>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
