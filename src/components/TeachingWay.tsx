import { motion } from "framer-motion";
import { MessageSquare, GraduationCap, ArrowRight, Users } from "lucide-react";
import { Card } from "./ui/card";

const TeachingWay = () => {
  const ways = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "হোয়াটসঅ্যাপ ক্লাস",
      description: "হোয়াটসঅ্যাপে গ্রুপ কলের মাধ্যমে সরাসরি ক্লাস নেওয়া হয়, যা অত্যন্ত সহজ এবং সাবলীল।",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "গ্রুপ গ্রেডিং সিস্টেম",
      description: "শিক্ষার্থীদের দক্ষতার ভিত্তিতে আলাদা আলাদা গ্রুপে ভাগ করে নিবিড়ভাবে পাঠদান করা হয়।",
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-primary" />,
      title: "পর্যায়ক্রমিক উন্নতি",
      description: "কায়দা থেকে তাজবিদ, এরপর তালিম ও এডভান্স লেভেলে ধাপে ধাপে উন্নীত হওয়ার সুযোগ।",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "শিক্ষক হিসেবে গড়ে তোলা",
      description: "আমাদের মূল লক্ষ্য শুধু শেখানো নয়, বরং আপনাকে একজন দক্ষ শিক্ষক হিসেবে গড়ে তোলা।",
    },
  ];

  return (
    <section className="bg-muted/30 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold text-foreground sm:text-5xl"
          >
            আমাদের <span className="text-primary">শিক্ষা পদ্ধতি</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed"
          >
            আমরা আধুনিক প্রযুক্তির সমন্বয়ে অত্যন্ত সহজ পদ্ধতিতে কুরআন শিক্ষা প্রদান করি।
            আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে আত্মবিশ্বাসের সাথে কুরআন তিলাওয়াত করতে শেখানো।
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 border-none bg-background shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {way.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{way.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {way.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center"
        >
          <p className="text-xl font-medium text-foreground italic">
            "আমাদের উদ্দেশ্য শুধু কুরআন শেখানো পর্যন্ত শেষ নয় বরং শিক্ষার্থীকে একজন শিক্ষক হিসেবে গড়ে তোলা।
            যাতে এই শিক্ষার ধারাবাহিকতা আজীবন চক্রবৃদ্ধি আকারে বাড়তে থাকে।"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingWay;