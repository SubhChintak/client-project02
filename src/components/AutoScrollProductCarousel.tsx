
import { useEffect, useRef } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface AutoScrollProductCarouselProps {
  title: string;
  products: Product[];
}

export function AutoScrollProductCarousel({ title, products }: AutoScrollProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number;
    const duration = 40000; // 40 seconds for a full scroll cycle
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Calculate position with a linear progression
      const position = totalWidth * progress;
      scrollContainer.scrollLeft = position;
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation when user interacts with the carousel
    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };

    const resumeAnimation = () => {
      startTime = performance.now();
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', pauseAnimation);
    scrollContainer.addEventListener('mouseleave', resumeAnimation);
    scrollContainer.addEventListener('touchstart', pauseAnimation);
    scrollContainer.addEventListener('touchend', resumeAnimation);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', pauseAnimation);
      scrollContainer.removeEventListener('mouseleave', resumeAnimation);
      scrollContainer.removeEventListener('touchstart', pauseAnimation);
      scrollContainer.removeEventListener('touchend', resumeAnimation);
    };
  }, []);

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
        <div 
          ref={carouselRef}
          className="horizontal-scroll-container overflow-x-auto"
        >
          {products.map((product) => (
            <div key={product.id} className="horizontal-scroll-item w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
