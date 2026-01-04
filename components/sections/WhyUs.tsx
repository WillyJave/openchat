'use client'

import { motion } from 'framer-motion'
import { Shield, Headphones, Rocket, Users } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Experiencia comprobada',
    description: 'Más de 3 años especializados en automatización de ventas para ecommerce en Latinoamérica.',
  },
  {
    icon: Headphones,
    title: 'Soporte dedicado',
    description: 'Equipo de soporte en español disponible para ayudarte cuando lo necesites.',
  },
  {
    icon: Rocket,
    title: 'Implementación rápida',
    description: 'Tu sistema funcionando en 48 horas. Sin complicaciones técnicas ni curvas de aprendizaje.',
  },
  {
    icon: Users,
    title: 'Comunidad activa',
    description: 'Acceso a una red de emprendedores que comparten estrategias y mejores prácticas.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function WhyUs() {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-h2 mb-6">
              Confía en quienes{' '}
              <span className="text-accent">entienden tu negocio</span>
            </h2>
            <p className="text-body-lg mb-8">
              No somos una empresa de tecnología que intenta vender a ecommerce.
              Somos especialistas en ecommerce que creamos tecnología para resolver
              problemas reales.
            </p>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  className="flex gap-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{reason.title}</h3>
                    <p className="text-body-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px]" />

              {/* Main circle */}
              <div className="absolute inset-8 rounded-full border border-accent/30 flex items-center justify-center">
                <div className="absolute inset-8 rounded-full border border-accent/20" />
                <div className="absolute inset-16 rounded-full border border-accent/10" />

                {/* Center content */}
                <div className="relative text-center p-8">
                  <div className="text-6xl font-bold text-accent mb-2">3+</div>
                  <div className="text-lg text-white font-medium">Años de</div>
                  <div className="text-lg text-white font-medium">experiencia</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-background-elevated px-4 py-2 rounded-full border border-white/10 text-sm text-white">
                🇲🇽 México
              </div>
              <div className="absolute bottom-4 left-4 bg-background-elevated px-4 py-2 rounded-full border border-white/10 text-sm text-white">
                🇨🇴 Colombia
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-background-elevated px-4 py-2 rounded-full border border-white/10 text-sm text-white">
                🇵🇪 Perú
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-background-elevated px-4 py-2 rounded-full border border-white/10 text-sm text-white">
                🇨🇱 Chile
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
