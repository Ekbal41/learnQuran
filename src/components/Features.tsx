import { motion } from "framer-motion"
import {
  Users,
  GraduationCap,
  BookOpen
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "অভিজ্ঞ শিক্ষক",
    description: "আমাদের সকল শিক্ষক অভিজ্ঞ ও দ্বীনি শিক্ষায় শিক্ষিত যারা অত্যন্ত ধৈর্যের সাথে সাইন্টিফিক পদ্ধতিতে শিক্ষা প্রদান করেন।",
    icon: Users,
  },
  {
    title: "সব বয়সের জন্য",
    description: "শিশু থেকে বৃদ্ধ যে কেউ আমাদের এখানে কুরআন শিখতে পারেন। আমরা প্রত্যেকের সক্ষমতার ভিত্তিতে আলাদা পদ্ধতি অনুসরণ করি।",
    icon: GraduationCap,
  },
  {
    title: "সম্পূর্ণ ফ্রি",
    description: "আমরা কোনো ফী গ্রহণ করিনা। শুধুমাত্র আল্লাহর সন্তুষ্টির উদ্দেশ্যে কুরআনের আলো ছড়িয়ে দেওয়াই আমাদের মূল লক্ষ্য!",
    icon: BookOpen,
  },
]

const Features = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            কেন আমাদের <span className="text-primary">বেছে নেবেন?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            আমরা মানসম্মত কুরআন শিক্ষা নিশ্চিত করতে আধুনিক প্রযুক্তি এবং ঐতিহ্যবাহী পদ্ধতির সমন্বয় ঘটিয়েছি।
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-background shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
