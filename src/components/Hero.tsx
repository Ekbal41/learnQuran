import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 islamic-pattern pointer-events-none" />

      <div className="container mt-12 md:mt-0 relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span>সম্পূর্ণ ফ্রি অনলাইন কুরআন শিক্ষা</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            বিনা মূল্যে শুদ্ধভাবে <br />
            <span className="text-primary">কুরআন শিখুন</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            সব বয়সের মানুষের জন্য আমাদের এই ফ্রি অনলাইন কুরআন শিক্ষা কেন্দ্র।
            অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে তাজবিদ সহ কুরআন শিখুন একদম ফ্রি।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button size="lg" variant="islamic" className="px-10" asChild>
              <a
                href="https://forms.gle/EeF9VNQJXLS974qB7"
                target="_blank"
                rel="noopener noreferrer"
              >
                এখনই যোগ দিন
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10">
              <a href="#instructors">আমাদের সম্পর্কে জানুন</a>
            </Button>
          </motion.div>

          {/* Stats or Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-8"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">১০০%</span>
              <span className="text-sm text-muted-foreground">
                অনলাইন ক্লাস
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">২৪/১২</span>
              <span className="text-sm text-muted-foreground">সাপোর্ট</span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
