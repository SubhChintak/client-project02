
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ProductScroll } from "@/components/ProductScroll";
import { AutoScrollProductCarousel } from "@/components/AutoScrollProductCarousel";
import { AboutMe } from "@/components/AboutMe";
import { PromotionalMarquee } from "@/components/PromotionalMarquee";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getBestSellers, products, getMensProducts, getWomensProducts } from "@/data/products";

const Index = () => {
  const [bestSellers, setBestSellers] = useState(getBestSellers());
  const [mensProducts, setMensProducts] = useState(getMensProducts());
  const [womensProducts, setWomensProducts] = useState(getWomensProducts());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <PromotionalMarquee />
          
          <div id="best-sellers">
            <ProductScroll 
              title="Top Picks" 
              products={bestSellers} 
            />
          </div>
          
          <div id="all-products" className="space-y-8">
            <hr/>
            <h1 className="flex justify-center">All Products</h1>
            <hr/>
            <div id="mens-products">
              <ProductScroll 
                title="For Him" 
                products={mensProducts}
              />
            </div>
            
            <div id="womens-products">
              <ProductScroll 
                title="For Her" 
                products={womensProducts} 
                // reverse={true}
              />
            </div>
          </div>
          
          <div id="about">
            <AboutMe />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
