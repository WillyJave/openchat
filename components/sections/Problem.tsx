'use client'

import { motion } from 'framer-motion'
import { Card, CardIcon, CardTitle, CardDescription } from '@/components/ui/card'
import { Clock, MessagesSquare, Moon, BarChart3 } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Respuestas lentas = ventas perdidas',
    description: 'Cada minuto que tardas en responder, un cliente se va con la competencia. El 78% espera respuesta en menos de 1 hora.',
  },
  {
    icon: MessagesSquare,
    title: 'Bandeja de entrada caótica',
    description: 'Mensajes mezclados, sin priorizar. No sabes quién está listo para comprar y quién solo pregunta por curiosidad.',
  },
  {
    icon: Moon,
    title: 'Sin cobertura 24/7',
    description: 'Mientras duermes, tus clientes buscan en otro lado. Las ventas nocturnas y de fin de semana se pierden.',
  },
  {
    icon: BarChart3,
    title: 'Cero visibilidad del proceso',
    description: 'No sabes qué mensajes convierten, cuántos leads se pierden, ni dónde está el cuello de botella.',
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

export function Problem() {
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
            ¿Tu WhatsApp es un{' '}
            <span className="text-red-400">cuello de botella</span>?
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Si manejas más de 50 conversaciones diarias, probablemente reconoces estos problemas
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants}>
              <Card className="h-full border-red-500/20 hover:border-red-500/40">
                <CardIcon className="bg-red-500/10 text-red-400 group-hover:bg-red-500/20">
                  <problem.icon className="w-6 h-6" />
                </CardIcon>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
