import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-primary islamic-pattern opacity-10" />
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="container relative z-10 mx-auto px-4 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
            আজই আপনার কুরআন শিক্ষার <br /> যাত্রা শুরু করুন
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80">
            আমাদের সাথে যুক্ত হয়ে সহীহভাবে কুরআন তিলাওয়াত শিখুন। আমরা আপনাকে একটি সুন্দর এবং আধ্যাত্মিক পরিবেশ নিশ্চিত করব।
          </p>
          <Button size="lg" variant="secondary" className="px-10 text-lg font-bold" asChild>
            <a href="https://forms.gle/placeholder" target="_blank" rel="noopener noreferrer">
              এখনই যোগ দিন
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="mt-6 text-sm text-primary-foreground/60">
            কোনো প্রশ্ন আছে? আমাদের কল করুন: <span className="font-bold text-white">+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
          </p>
        </motion.div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    </section>
  )
}

export default CTA
