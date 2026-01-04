import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Differentiation } from '@/components/sections/Differentiation'
import { Metrics } from '@/components/sections/Metrics'
import { WhyUs } from '@/components/sections/WhyUs'
import { CTAForm } from '@/components/sections/CTAForm'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentiation />
        <Metrics />
        <WhyUs />
        <CTAForm />
      </main>
      <Footer />
    </>
  )
}
