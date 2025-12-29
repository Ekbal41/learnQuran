import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Instructors from "@/components/Instructors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import TeachingWay from "./components/TeachingWay";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <div id="about">
            <Features />
          </div>
          <div id="teaching-way"> <TeachingWay /></div>
          <div id="instructors">
            <Instructors />
          </div>
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
