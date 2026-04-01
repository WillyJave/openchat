'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { leadFormSchema, type LeadFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input, Select } from '@/components/ui/input'
import { CheckCircle, ArrowRight, Clock, Shield, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const benefitIcons = [Clock, Shield, Zap]

export function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguage()
  const f = t.ctaForm

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="cta-form" className="py-24 bg-background-secondary relative">
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
                {f.title1}{' '}
                <span className="text-accent">{f.titleHighlight}</span>
              </h2>
              <p className="text-body-lg mb-8">{f.subtitle}</p>

              <div className="space-y-4">
                {f.benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i]
                  return (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-white">{benefit}</span>
                    </div>
                  )
                })}
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
                  <h3 className="text-xl font-bold text-white mb-2">{f.successTitle}</h3>
                  <p className="text-muted">{f.successMessage}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-background-elevated rounded-2xl border border-white/10 p-8"
                >
                  <div className="space-y-4">
                    <Input
                      placeholder={f.namePlaceholder}
                      {...register('name')}
                      error={errors.name?.message}
                    />
                    <Input
                      type="email"
                      placeholder={f.emailPlaceholder}
                      {...register('email')}
                      error={errors.email?.message}
                    />
                    <Input
                      type="tel"
                      placeholder={f.phonePlaceholder}
                      {...register('phone')}
                      error={errors.phone?.message}
                    />
                    <Input
                      placeholder={f.companyPlaceholder}
                      {...register('company')}
                      error={errors.company?.message}
                    />
                    <Select
                      placeholder={f.volumePlaceholder}
                      options={f.volumeOptions as { value: string; label: string }[]}
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
                          {f.submitting}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          {f.submitButton}
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted text-center mt-4">{f.disclaimer}</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
