'use client'

import { motion } from 'framer-motion'
import { Card, CardIcon, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Brain, RefreshCw, LineChart } from 'lucide-react'

const solutions = [
  {
    icon: Zap,
    title: 'Respuestas instantáneas 24/7',
    description: 'Tu asistente de ventas nunca duerme. Responde en segundos, cualquier día, a cualquier hora.',
    badge: 'Automático',
  },
  {
    icon: Brain,
    title: 'Calificación inteligente',
    description: 'Identifica automáticamente quién está listo para comprar y prioriza los leads más calientes.',
    badge: 'IA',
  },
  {
    icon: RefreshCw,
    title: 'Seguimiento automatizado',
    description: 'Secuencias de mensajes que nutren y convierten leads sin intervención manual.',
    badge: 'Sin esfuerzo',
  },
  {
    icon: LineChart,
    title: 'Analítica en tiempo real',
    description: 'Dashboard completo con métricas de conversión, tiempos de respuesta y rendimiento del equipo.',
    badge: 'Insights',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Solution() {
  return (
    <section className="py-24 bg-background-secondary relative">
      {/* Subtle gradient overlay */}
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
            La solución
          </Badge>
          <h2 className="text-h2 mb-4">
            OpenChat:{' '}
            <span className="text-accent">ventas automáticas</span>{' '}
            por WhatsApp
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Un sistema completo que transforma tu WhatsApp en un canal de ventas
            profesional y escalable
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution) => (
            <motion.div key={solution.title} variants={itemVariants}>
              <Card glow className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <CardIcon>
                    <solution.icon className="w-6 h-6" />
                  </CardIcon>
                  <Badge variant="accent">{solution.badge}</Badge>
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
