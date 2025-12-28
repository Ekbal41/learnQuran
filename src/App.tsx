import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Instructors from "@/components/Instructors"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <Features />
        </div>
        <div id="instructors">
          <Instructors />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
