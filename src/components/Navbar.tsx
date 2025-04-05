
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <Logo />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#best-sellers" className="text-sm font-medium hover:text-primary" onClick={(e) => {
            e.preventDefault();
            scrollToSection("best-sellers");
          }}>
            Best Sellers
          </a>
          <a href="#all-products" className="text-sm font-medium hover:text-primary" onClick={(e) => {
            e.preventDefault();
            scrollToSection("all-products");
          }}>
            All Products
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary" onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}>
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary" onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}>
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="container bg-background grid gap-6 py-6">
            <a href="#best-sellers" className="text-lg font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection("best-sellers");
            }}>
              Best Sellers
            </a>
            <a href="#all-products" className="text-lg font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection("all-products");
            }}>
              All Products
            </a>
            <a href="#about" className="text-lg font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
              About
            </a>
            <a href="#contact" className="text-lg font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>
              Contact
            </a>
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
