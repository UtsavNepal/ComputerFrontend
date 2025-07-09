import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VersatileSection from '@/components/VersatileSection'
import ElevatingSection from '@/components/ElevatingSection'
import PoweredBySection from '@/components/PoweredBySection'
import HPEnvySection from '@/components/HPEnvySection'
import WorkspaceSection from '@/components/WorkspaceSection'
import RedefiningSection from '@/components/RedefiningSection'
import ExceptionalSection from '@/components/ExceptionalSection'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main className="overflow-hidden">
        <section id="home"><HeroSection /></section>
        <section id="products"><VersatileSection /></section>
        <section id="features"><ElevatingSection /></section>
        <section id="powered"><PoweredBySection /></section>
        <section id="hp-envy"><HPEnvySection /></section>
        <section id="workspace"><WorkspaceSection /></section>
        <section id="redefined"><RedefiningSection /></section>
        <section id="exceptional"><ExceptionalSection /></section>
      </main>
      <Footer />
    </div>
  )
}