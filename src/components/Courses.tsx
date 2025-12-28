import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  {
    title: "কায়দা ও আমপারা",
    price: "সম্পূর্ণ ফ্রি",
    features: [
      "আরবি বর্ণমালা শিক্ষা",
      "শুদ্ধ উচ্চারণ পদ্ধতি",
      "ছোট ছোট সূরা মুখস্থ",
      "মৌলিক কালিমা শিক্ষা",
    ],
    recommended: false,
  },
  {
    title: "নাজেরা ও তাজবিদ",
    price: "সম্পূর্ণ ফ্রি",
    features: [
      "পূর্ণাঙ্গ কুরআন তিলাওয়াত",
      "তাজবিদের বিস্তারিত নিয়ম",
      "সহীহ মাখরাজ শিক্ষা",
      "প্রতিদিন ১ ঘণ্টা ক্লাস",
    ],
    recommended: true,
  },
  {
    title: "হিফজুল কুরআন",
    price: "সম্পূর্ণ ফ্রি",
    features: [
      "সম্পূর্ণ কুরআন মুখস্থ",
      "তাজবিদ ও লাহজা শিক্ষা",
      "সাপ্তাহিক পরীক্ষা",
      "বিশেষ তত্ত্বাবধান",
    ],
    recommended: false,
  },
]

const Courses = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            আমাদের <span className="text-primary">কোর্সসমূহ</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            আপনার প্রয়োজন অনুযায়ী সঠিক কোর্সটি বেছে নিন এবং আজই আপনার কুরআনিক যাত্রা শুরু করুন।
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full border-2 ${course.recommended ? 'border-primary shadow-xl' : 'border-transparent shadow-md'}`}>
                {course.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    জনপ্রিয়
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="mb-2 text-2xl">{course.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{course.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={course.recommended ? "islamic" : "outline"} asChild>
                    <a href="https://forms.gle/placeholder" target="_blank" rel="noopener noreferrer">
                      ভর্তি হোন
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
