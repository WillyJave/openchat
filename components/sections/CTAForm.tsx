'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { leadFormSchema, type LeadFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input, Select } from '@/components/ui/input'
import { CheckCircle, ArrowRight, Clock, Shield, Zap } from 'lucide-react'

const volumeOptions = [
  { value: '50-100', label: '50-100 mensajes/día' },
  { value: '100-200', label: '100-200 mensajes/día' },
  { value: '200-500', label: '200-500 mensajes/día' },
  { value: '500+', label: 'Más de 500 mensajes/día' },
]

const benefits = [
  { icon: Clock, text: 'Diagnóstico en 24 horas' },
  { icon: Shield, text: 'Sin compromiso' },
  { icon: Zap, text: 'Recomendaciones personalizadas' },
]

export function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="cta-form" className="py-24 bg-background-secondary relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 rounded-full blur-[128px] opacity-50" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-h2 mb-4">
                Obtén tu{' '}
                <span className="text-accent">diagnóstico gratuito</span>
              </h2>
              <p className="text-body-lg mb-8">
                Analizamos tu proceso actual de ventas por WhatsApp y te mostramos
                exactamente cómo multiplicar tus conversiones.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-white">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-background-elevated rounded-2xl border border-accent/30 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ¡Solicitud recibida!
                  </h3>
                  <p className="text-muted">
                    Te contactaremos en las próximas 24 horas con tu diagnóstico
                    personalizado.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-background-elevated rounded-2xl border border-white/10 p-8"
                >
                  <div className="space-y-4">
                    <Input
                      placeholder="Nombre completo"
                      {...register('name')}
                      error={errors.name?.message}
                    />

                    <Input
                      type="email"
                      placeholder="Email empresarial"
                      {...register('email')}
                      error={errors.email?.message}
                    />

                    <Input
                      type="tel"
                      placeholder="WhatsApp (con código de país)"
                      {...register('phone')}
                      error={errors.phone?.message}
                    />

                    <Input
                      placeholder="Nombre de tu empresa"
                      {...register('company')}
                      error={errors.company?.message}
                    />

                    <Select
                      placeholder="Volumen de mensajes diarios"
                      options={volumeOptions}
                      {...register('volume')}
                      error={errors.volume?.message}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Quiero mi diagnóstico gratis
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted text-center mt-4">
                    Al enviar, aceptas que te contactemos para tu diagnóstico.
                    Sin spam, sin compromiso.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
