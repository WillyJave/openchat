'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'es' | 'en' | 'pt'

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
]

export const translations = {
  es: {
    // Header
    header: {
      login: 'Iniciar sesión',
      cta: 'Diagnóstico gratis',
    },
    // Hero
    hero: {
      badge: 'Para ecommerce con +50 mensajes/día',
      title1: 'Convierte tu',
      titleHighlight: 'WhatsApp',
      title2: 'en una máquina de ventas automática',
      subtitle:
        'Sistema de ventas que atiende, califica y cierra clientes por WhatsApp las 24 horas, multiplicando tus conversiones sin aumentar tu equipo.',
      ctaPrimary: 'Diagnóstico gratis',
      ctaSecondary: 'Ver demo',
      stats: [
        { value: '3x', label: 'más respuestas' },
        { value: '70%', label: 'menos tiempo' },
        { value: '+50', label: 'negocios activos' },
      ],
    },
    // Problem
    problem: {
      title1: '¿Tu WhatsApp es un',
      titleHighlight: 'cuello de botella',
      title2: '?',
      subtitle:
        'Si manejas más de 50 conversaciones diarias, probablemente reconoces estos problemas',
      items: [
        {
          title: 'Respuestas lentas = ventas perdidas',
          description:
            'Cada minuto que tardas en responder, un cliente se va con la competencia. El 78% espera respuesta en menos de 1 hora.',
        },
        {
          title: 'Bandeja de entrada caótica',
          description:
            'Mensajes mezclados, sin priorizar. No sabes quién está listo para comprar y quién solo pregunta por curiosidad.',
        },
        {
          title: 'Sin cobertura 24/7',
          description:
            'Mientras duermes, tus clientes buscan en otro lado. Las ventas nocturnas y de fin de semana se pierden.',
        },
        {
          title: 'Cero visibilidad del proceso',
          description:
            'No sabes qué mensajes convierten, cuántos leads se pierden, ni dónde está el cuello de botella.',
        },
      ],
    },
    // Solution
    solution: {
      badge: 'La solución',
      title1: 'OpenChat:',
      titleHighlight: 'ventas automáticas',
      title2: 'por WhatsApp',
      subtitle:
        'Un sistema completo que transforma tu WhatsApp en un canal de ventas profesional y escalable',
      items: [
        {
          title: 'Respuestas instantáneas 24/7',
          description:
            'Tu asistente de ventas nunca duerme. Responde en segundos, cualquier día, a cualquier hora.',
          badge: 'Automático',
        },
        {
          title: 'Calificación inteligente',
          description:
            'Identifica automáticamente quién está listo para comprar y prioriza los leads más calientes.',
          badge: 'IA',
        },
        {
          title: 'Seguimiento automatizado',
          description:
            'Secuencias de mensajes que nutren y convierten leads sin intervención manual.',
          badge: 'Sin esfuerzo',
        },
        {
          title: 'Analítica en tiempo real',
          description:
            'Dashboard completo con métricas de conversión, tiempos de respuesta y rendimiento del equipo.',
          badge: 'Insights',
        },
      ],
    },
    // Differentiation
    differentiation: {
      title1: '¿Por qué',
      titleHighlight: 'OpenChat',
      title2: 'y no otra solución?',
      subtitle:
        'No somos un chatbot genérico. Somos una plataforma de ventas diseñada específicamente para ecommerce en LATAM.',
      colFeature: 'Característica',
      colOthers: 'Otros',
      items: [
        { feature: 'Múltiples agentes simultáneos' },
        { feature: 'Diseñado nativo para WhatsApp' },
        { feature: 'Especializado en ecommerce' },
        { feature: 'Implementación en 48 horas' },
        { feature: 'Sin contratos largos' },
        { feature: 'Soporte en español 24/7' },
      ],
    },
    // Metrics
    metrics: {
      title1: 'Resultados que',
      titleHighlight: 'hablan solos',
      subtitle: 'Números reales de negocios como el tuyo que ya usan OpenChat',
      items: [
        { label: 'Negocios activos', description: 'Empresas usando OpenChat diariamente' },
        { label: 'Mensajes procesados', description: 'Conversaciones automatizadas al mes' },
        { label: 'Más conversiones', description: 'Incremento promedio en ventas' },
        { label: 'Menos tiempo', description: 'Reducción en tiempo de respuesta' },
      ],
      testimonial:
        '"Pasamos de perder el 40% de leads a cerrar el 80% de las conversaciones. OpenChat transformó completamente nuestro proceso de ventas."',
      testimonialName: 'María Rodríguez',
      testimonialRole: 'CEO, TiendaFashion.com',
    },
    // WhyUs
    whyUs: {
      title1: 'Confía en quienes',
      titleHighlight: 'entienden tu negocio',
      subtitle:
        'No somos una empresa de tecnología que intenta vender a ecommerce. Somos especialistas en ecommerce que creamos tecnología para resolver problemas reales.',
      yearsLabel1: 'Años de',
      yearsLabel2: 'experiencia',
      items: [
        {
          title: 'Experiencia comprobada',
          description:
            'Más de 3 años especializados en automatización de ventas para ecommerce en Latinoamérica.',
        },
        {
          title: 'Soporte dedicado',
          description:
            'Equipo de soporte en español disponible para ayudarte cuando lo necesites.',
        },
        {
          title: 'Implementación rápida',
          description:
            'Tu sistema funcionando en 48 horas. Sin complicaciones técnicas ni curvas de aprendizaje.',
        },
        {
          title: 'Comunidad activa',
          description:
            'Acceso a una red de emprendedores que comparten estrategias y mejores prácticas.',
        },
      ],
    },
    // CTAForm
    ctaForm: {
      title1: 'Obtén tu',
      titleHighlight: 'diagnóstico gratuito',
      subtitle:
        'Analizamos tu proceso actual de ventas por WhatsApp y te mostramos exactamente cómo multiplicar tus conversiones.',
      benefits: [
        'Diagnóstico en 24 horas',
        'Sin compromiso',
        'Recomendaciones personalizadas',
      ],
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Email empresarial',
      phonePlaceholder: 'WhatsApp (con código de país)',
      companyPlaceholder: 'Nombre de tu empresa',
      volumePlaceholder: 'Volumen de mensajes diarios',
      volumeOptions: [
        { value: '50-100', label: '50-100 mensajes/día' },
        { value: '100-200', label: '100-200 mensajes/día' },
        { value: '200-500', label: '200-500 mensajes/día' },
        { value: '500+', label: 'Más de 500 mensajes/día' },
      ],
      submitButton: 'Quiero mi diagnóstico gratis',
      submitting: 'Enviando...',
      disclaimer: 'Al enviar, aceptas que te contactemos para tu diagnóstico. Sin spam, sin compromiso.',
      successTitle: '¡Solicitud recibida!',
      successMessage: 'Te contactaremos en las próximas 24 horas con tu diagnóstico personalizado.',
    },
    // Footer
    footer: {
      ctaTitle: '¿Listo para transformar tus ventas por WhatsApp?',
      ctaSubtitle:
        'Únete a los más de 500 negocios que ya multiplicaron sus conversiones con OpenChat.',
      ctaButton: 'Comenzar ahora',
      tagline: 'Sistema de ventas automatizado para WhatsApp. Multiplica tus conversiones sin aumentar tu equipo.',
      productTitle: 'Producto',
      productLinks: ['Características', 'Precios', 'Integraciones', 'Casos de éxito'],
      companyTitle: 'Empresa',
      companyLinks: ['Sobre nosotros', 'Blog', 'Contacto', 'Política de privacidad'],
      copyright: 'Todos los derechos reservados.',
      vibecoded: 'vibecodeado con amor ❤️',
    },
  },

  en: {
    header: {
      login: 'Log in',
      cta: 'Free Diagnosis',
    },
    hero: {
      badge: 'For ecommerce with +50 messages/day',
      title1: 'Turn your',
      titleHighlight: 'WhatsApp',
      title2: 'into an automatic sales machine',
      subtitle:
        'A sales system that attends, qualifies, and closes clients on WhatsApp 24/7, multiplying your conversions without growing your team.',
      ctaPrimary: 'Free Diagnosis',
      ctaSecondary: 'Watch demo',
      stats: [
        { value: '3x', label: 'more responses' },
        { value: '70%', label: 'less time' },
        { value: '+50', label: 'active businesses' },
      ],
    },
    problem: {
      title1: 'Is your WhatsApp a',
      titleHighlight: 'bottleneck',
      title2: '?',
      subtitle:
        'If you handle more than 50 daily conversations, you probably recognize these problems',
      items: [
        {
          title: 'Slow replies = lost sales',
          description:
            'Every minute you take to reply, a customer goes to a competitor. 78% expect a response in under 1 hour.',
        },
        {
          title: 'Chaotic inbox',
          description:
            "Mixed messages, no prioritization. You don't know who is ready to buy and who is just curious.",
        },
        {
          title: 'No 24/7 coverage',
          description:
            'While you sleep, your customers look elsewhere. Nighttime and weekend sales are lost.',
        },
        {
          title: 'Zero process visibility',
          description:
            "You don't know which messages convert, how many leads are lost, or where the bottleneck is.",
        },
      ],
    },
    solution: {
      badge: 'The solution',
      title1: 'OpenChat:',
      titleHighlight: 'automatic sales',
      title2: 'on WhatsApp',
      subtitle:
        'A complete system that transforms your WhatsApp into a professional, scalable sales channel',
      items: [
        {
          title: 'Instant 24/7 responses',
          description:
            'Your sales assistant never sleeps. Replies in seconds, any day, any time.',
          badge: 'Automatic',
        },
        {
          title: 'Smart qualification',
          description:
            'Automatically identifies who is ready to buy and prioritizes the hottest leads.',
          badge: 'AI',
        },
        {
          title: 'Automated follow-up',
          description:
            'Message sequences that nurture and convert leads without manual intervention.',
          badge: 'Effortless',
        },
        {
          title: 'Real-time analytics',
          description:
            'Full dashboard with conversion metrics, response times, and team performance.',
          badge: 'Insights',
        },
      ],
    },
    differentiation: {
      title1: 'Why',
      titleHighlight: 'OpenChat',
      title2: 'and not another solution?',
      subtitle:
        'We are not a generic chatbot. We are a sales platform designed specifically for ecommerce in LATAM.',
      colFeature: 'Feature',
      colOthers: 'Others',
      items: [
        { feature: 'Multiple simultaneous agents' },
        { feature: 'Natively built for WhatsApp' },
        { feature: 'Specialized in ecommerce' },
        { feature: 'Implementation in 48 hours' },
        { feature: 'No long-term contracts' },
        { feature: '24/7 support in your language' },
      ],
    },
    metrics: {
      title1: 'Results that',
      titleHighlight: 'speak for themselves',
      subtitle: 'Real numbers from businesses like yours that already use OpenChat',
      items: [
        { label: 'Active businesses', description: 'Companies using OpenChat daily' },
        { label: 'Messages processed', description: 'Automated conversations per month' },
        { label: 'More conversions', description: 'Average increase in sales' },
        { label: 'Less time', description: 'Reduction in response time' },
      ],
      testimonial:
        '"We went from losing 40% of leads to closing 80% of conversations. OpenChat completely transformed our sales process."',
      testimonialName: 'María Rodríguez',
      testimonialRole: 'CEO, TiendaFashion.com',
    },
    whyUs: {
      title1: 'Trust those who',
      titleHighlight: 'understand your business',
      subtitle:
        'We are not a tech company trying to sell to ecommerce. We are ecommerce specialists who built technology to solve real problems.',
      yearsLabel1: 'Years of',
      yearsLabel2: 'experience',
      items: [
        {
          title: 'Proven experience',
          description:
            'More than 3 years specializing in sales automation for ecommerce in Latin America.',
        },
        {
          title: 'Dedicated support',
          description:
            'Support team in your language available to help you whenever you need.',
        },
        {
          title: 'Fast implementation',
          description:
            'Your system running in 48 hours. No technical complications or learning curves.',
        },
        {
          title: 'Active community',
          description:
            'Access to a network of entrepreneurs sharing strategies and best practices.',
        },
      ],
    },
    ctaForm: {
      title1: 'Get your',
      titleHighlight: 'free diagnosis',
      subtitle:
        'We analyze your current WhatsApp sales process and show you exactly how to multiply your conversions.',
      benefits: [
        'Diagnosis in 24 hours',
        'No commitment',
        'Personalized recommendations',
      ],
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Business email',
      phonePlaceholder: 'WhatsApp (with country code)',
      companyPlaceholder: 'Company name',
      volumePlaceholder: 'Daily message volume',
      volumeOptions: [
        { value: '50-100', label: '50-100 messages/day' },
        { value: '100-200', label: '100-200 messages/day' },
        { value: '200-500', label: '200-500 messages/day' },
        { value: '500+', label: 'More than 500 messages/day' },
      ],
      submitButton: 'I want my free diagnosis',
      submitting: 'Sending...',
      disclaimer: 'By submitting, you agree we may contact you for your diagnosis. No spam, no commitment.',
      successTitle: 'Request received!',
      successMessage: 'We will contact you within the next 24 hours with your personalized diagnosis.',
    },
    footer: {
      ctaTitle: 'Ready to transform your WhatsApp sales?',
      ctaSubtitle:
        'Join more than 500 businesses that have already multiplied their conversions with OpenChat.',
      ctaButton: 'Get started now',
      tagline: 'Automated sales system for WhatsApp. Multiply your conversions without growing your team.',
      productTitle: 'Product',
      productLinks: ['Features', 'Pricing', 'Integrations', 'Success stories'],
      companyTitle: 'Company',
      companyLinks: ['About us', 'Blog', 'Contact', 'Privacy policy'],
      copyright: 'All rights reserved.',
      vibecoded: 'vibecoded with love ❤️',
    },
  },

  pt: {
    header: {
      login: 'Entrar',
      cta: 'Diagnóstico grátis',
    },
    hero: {
      badge: 'Para ecommerce com +50 mensagens/dia',
      title1: 'Transforme seu',
      titleHighlight: 'WhatsApp',
      title2: 'em uma máquina de vendas automática',
      subtitle:
        'Sistema de vendas que atende, qualifica e fecha clientes pelo WhatsApp 24 horas, multiplicando suas conversões sem aumentar sua equipe.',
      ctaPrimary: 'Diagnóstico grátis',
      ctaSecondary: 'Ver demo',
      stats: [
        { value: '3x', label: 'mais respostas' },
        { value: '70%', label: 'menos tempo' },
        { value: '+50', label: 'negócios ativos' },
      ],
    },
    problem: {
      title1: 'Seu WhatsApp é um',
      titleHighlight: 'gargalo',
      title2: '?',
      subtitle:
        'Se você gerencia mais de 50 conversas diárias, provavelmente reconhece esses problemas',
      items: [
        {
          title: 'Respostas lentas = vendas perdidas',
          description:
            'Cada minuto que você demora a responder, um cliente vai para a concorrência. 78% esperam resposta em menos de 1 hora.',
        },
        {
          title: 'Caixa de entrada caótica',
          description:
            'Mensagens misturadas, sem prioridade. Você não sabe quem está pronto para comprar e quem está apenas curioso.',
        },
        {
          title: 'Sem cobertura 24/7',
          description:
            'Enquanto você dorme, seus clientes buscam em outro lugar. Vendas noturnas e de fim de semana se perdem.',
        },
        {
          title: 'Zero visibilidade do processo',
          description:
            'Você não sabe quais mensagens convertem, quantos leads se perdem ou onde está o gargalo.',
        },
      ],
    },
    solution: {
      badge: 'A solução',
      title1: 'OpenChat:',
      titleHighlight: 'vendas automáticas',
      title2: 'pelo WhatsApp',
      subtitle:
        'Um sistema completo que transforma seu WhatsApp em um canal de vendas profissional e escalável',
      items: [
        {
          title: 'Respostas instantâneas 24/7',
          description:
            'Seu assistente de vendas nunca dorme. Responde em segundos, qualquer dia, a qualquer hora.',
          badge: 'Automático',
        },
        {
          title: 'Qualificação inteligente',
          description:
            'Identifica automaticamente quem está pronto para comprar e prioriza os leads mais quentes.',
          badge: 'IA',
        },
        {
          title: 'Acompanhamento automatizado',
          description:
            'Sequências de mensagens que nutrem e convertem leads sem intervenção manual.',
          badge: 'Sem esforço',
        },
        {
          title: 'Análises em tempo real',
          description:
            'Dashboard completo com métricas de conversão, tempos de resposta e desempenho da equipe.',
          badge: 'Insights',
        },
      ],
    },
    differentiation: {
      title1: 'Por que',
      titleHighlight: 'OpenChat',
      title2: 'e não outra solução?',
      subtitle:
        'Não somos um chatbot genérico. Somos uma plataforma de vendas criada especificamente para ecommerce na LATAM.',
      colFeature: 'Recurso',
      colOthers: 'Outros',
      items: [
        { feature: 'Múltiplos agentes simultâneos' },
        { feature: 'Projetado nativamente para WhatsApp' },
        { feature: 'Especializado em ecommerce' },
        { feature: 'Implementação em 48 horas' },
        { feature: 'Sem contratos longos' },
        { feature: 'Suporte em português 24/7' },
      ],
    },
    metrics: {
      title1: 'Resultados que',
      titleHighlight: 'falam por si',
      subtitle: 'Números reais de negócios como o seu que já usam o OpenChat',
      items: [
        { label: 'Negócios ativos', description: 'Empresas usando OpenChat diariamente' },
        { label: 'Mensagens processadas', description: 'Conversas automatizadas por mês' },
        { label: 'Mais conversões', description: 'Aumento médio em vendas' },
        { label: 'Menos tempo', description: 'Redução no tempo de resposta' },
      ],
      testimonial:
        '"Passamos de perder 40% dos leads para fechar 80% das conversas. O OpenChat transformou completamente nosso processo de vendas."',
      testimonialName: 'María Rodríguez',
      testimonialRole: 'CEO, TiendaFashion.com',
    },
    whyUs: {
      title1: 'Confie em quem',
      titleHighlight: 'entende seu negócio',
      subtitle:
        'Não somos uma empresa de tecnologia tentando vender para ecommerce. Somos especialistas em ecommerce que criamos tecnologia para resolver problemas reais.',
      yearsLabel1: 'Anos de',
      yearsLabel2: 'experiência',
      items: [
        {
          title: 'Experiência comprovada',
          description:
            'Mais de 3 anos especializados em automação de vendas para ecommerce na América Latina.',
        },
        {
          title: 'Suporte dedicado',
          description:
            'Equipe de suporte em português disponível para ajudá-lo quando precisar.',
        },
        {
          title: 'Implementação rápida',
          description:
            'Seu sistema funcionando em 48 horas. Sem complicações técnicas ou curvas de aprendizado.',
        },
        {
          title: 'Comunidade ativa',
          description:
            'Acesso a uma rede de empreendedores que compartilham estratégias e melhores práticas.',
        },
      ],
    },
    ctaForm: {
      title1: 'Obtenha seu',
      titleHighlight: 'diagnóstico gratuito',
      subtitle:
        'Analisamos seu processo de vendas pelo WhatsApp e mostramos exatamente como multiplicar suas conversões.',
      benefits: [
        'Diagnóstico em 24 horas',
        'Sem compromisso',
        'Recomendações personalizadas',
      ],
      namePlaceholder: 'Nome completo',
      emailPlaceholder: 'E-mail empresarial',
      phonePlaceholder: 'WhatsApp (com código do país)',
      companyPlaceholder: 'Nome da sua empresa',
      volumePlaceholder: 'Volume de mensagens diárias',
      volumeOptions: [
        { value: '50-100', label: '50-100 mensagens/dia' },
        { value: '100-200', label: '100-200 mensagens/dia' },
        { value: '200-500', label: '200-500 mensagens/dia' },
        { value: '500+', label: 'Mais de 500 mensagens/dia' },
      ],
      submitButton: 'Quero meu diagnóstico grátis',
      submitting: 'Enviando...',
      disclaimer: 'Ao enviar, você concorda que podemos entrar em contato para o diagnóstico. Sem spam, sem compromisso.',
      successTitle: 'Solicitação recebida!',
      successMessage: 'Entraremos em contato nas próximas 24 horas com seu diagnóstico personalizado.',
    },
    footer: {
      ctaTitle: 'Pronto para transformar suas vendas pelo WhatsApp?',
      ctaSubtitle:
        'Junte-se a mais de 500 negócios que já multiplicaram suas conversões com o OpenChat.',
      ctaButton: 'Começar agora',
      tagline: 'Sistema de vendas automatizado para WhatsApp. Multiplique suas conversões sem crescer sua equipe.',
      productTitle: 'Produto',
      productLinks: ['Recursos', 'Preços', 'Integrações', 'Casos de sucesso'],
      companyTitle: 'Empresa',
      companyLinks: ['Sobre nós', 'Blog', 'Contato', 'Política de privacidade'],
      copyright: 'Todos os direitos reservados.',
      vibecoded: 'vibecodado com amor ❤️',
    },
  },
} as const

export type Translations = typeof translations.es

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = translations[language] as Translations

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
