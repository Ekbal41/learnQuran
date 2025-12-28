import { Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground py-8 text-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © ২০২৪ কুরআন শিক্ষা কেন্দ্র। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
