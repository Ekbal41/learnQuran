import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const instructors = [
  {
    name: "আলী আহসান মুজাহিদ",
    role: "পরিচালক",
    image: "/mujahid.jpeg",
    experience: "টেক্সটাইল ইন্জিনিয়ার",

  },
  {
    name: "আব্দুল্লাহ আল মুজাহিদ",
    role: "প্রধান শিক্ষক",
    image: "/al-mujahid.jpeg",
    experience: "উম্মুল ক্বুরা বিশ্ববিদ্যালয়, সৌদী আরব",

  },
  {
    name: "সাজ্জাদুল ইসলাম",
    role: "সিনিয়র শিক্ষক",
    image: "/islam.jpeg",
    experience: "ইসলামিক ইউনিভার্সিটি, কুষ্টিয়া",

  },
  {
    name: "জহির আকন্দ",
    role: "মেন্টর",
    image: "/akond.jpeg",
    experience: "ডিরেক্টর, বন বিভাগ",
  },
]

const Instructors = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            আমাদের <span className="text-primary">অভিজ্ঞ শিক্ষকগণ</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            আমাদের শিক্ষকগণ অত্যন্ত দক্ষ এবং শিক্ষার্থীদের প্রতি যত্নশীল। তারা প্রতিটি শিক্ষার্থীকে তাদের মেধা অনুযায়ী শিক্ষা প্রদান করেন।
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none bg-background shadow-md transition-all hover:shadow-xl">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <Badge variant="secondary" className="mb-3">
                    {instructor.role}
                  </Badge>
                  <h3 className="mb-1 text-xl font-bold">{instructor.name}</h3>
                  <div className="flex items-center justify-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{instructor.experience}</p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors
