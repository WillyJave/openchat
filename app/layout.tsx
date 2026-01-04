import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenChat | Convierte WhatsApp en tu máquina de ventas',
  description: 'Automatizamos atención, seguimiento y ventas por WhatsApp para ecommerce con +50 mensajes diarios. Resultados en 72 horas.',
  keywords: 'whatsapp business, automatización whatsapp, crm whatsapp, ecommerce whatsapp, chatbot whatsapp',
  openGraph: {
    title: 'OpenChat | Sistema de ventas por WhatsApp',
    description: 'Más ventas por WhatsApp. Menos trabajo manual. Resultados en 72 horas.',
    type: 'website',
    locale: 'es_LA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
