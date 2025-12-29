import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "#" },
    { name: "শিক্ষকগণ", href: "#instructors" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          "bg-background shadow-sm py-3"
        )}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                কুরআন <span className="text-primary">শিক্ষা</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <ModeToggle />
              <Button variant="islamic" size="sm" asChild>
                <a
                  href="https://forms.gle/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  যোগ দিন
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-2 md:hidden">
              <ModeToggle />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-[64px] left-0 right-0 z-50 md:hidden bg-background border-t py-4 px-4 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2"
                >
                  {link.name}
                </a>
              ))}

              <Button variant="islamic" className="w-full" asChild>
                <a
                  href="https://forms.gle/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  যোগ দিন
                </a>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
