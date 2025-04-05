
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo size="large" />
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Handcrafted with love, designed for you. <br/>
              All over India shipping available.
            </p>
          </div>
          
          {/* <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <div className="flex flex-col items-center space-y-2">
              <a href="#best-sellers" className="text-sm hover:text-primary transition-colors">
                Best Sellers
              </a>
              <a href="#all-products" className="text-sm hover:text-primary transition-colors">
                All Products
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div> */}
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/the_artistic_affinity/" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} <span>Made with 🤍 by <a href="https://github.com/SubhChintak" className="font-bold">SubhChintak</a></span>.
              {/* <br/>All rights reserved. */}
            </p> 
          </div>
        </div>
      </div>
    </footer>
  );
}
