'use client'

import { motion } from 'framer-motion'
import { Card, CardIcon, CardTitle, CardDescription } from '@/components/ui/card'
import { Clock, MessagesSquare, Moon, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const icons = [Clock, MessagesSquare, Moon, BarChart3]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Problem() {
  const { t } = useLanguage()
  const p = t.problem

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
            {p.title1}{' '}
            <span className="text-red-400">{p.titleHighlight}</span>
            {p.title2}
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">{p.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {p.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <Card className="h-full border-red-500/20 hover:border-red-500/40">
                  <CardIcon className="bg-red-500/10 text-red-400 group-hover:bg-red-500/20">
                    <Icon className="w-6 h-6" />
                  </CardIcon>
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
