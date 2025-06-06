
import { Card } from "@/components/ui/card";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  size: 'normal' | 'tall' | 'wide' | 'large';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Custom Phone Art",
    description: "Personalized phone covers with intricate designs",
    imageUrl: "/placeholder.svg",
    category: "Phone Accessories",
    size: 'large'
  },
  {
    id: 2,
    title: "Handcrafted Jewelry",
    description: "Elegant jewelry pieces with gold accents",
    imageUrl: "/placeholder.svg",
    category: "Jewelry",
    size: 'normal'
  },
  {
    id: 3,
    title: "Art Prints",
    description: "Limited edition art prints",
    imageUrl: "/placeholder.svg",
    category: "Prints",
    size: 'tall'
  },
  {
    id: 4,
    title: "Custom Portraits",
    description: "Personalized portrait commissions",
    imageUrl: "/placeholder.svg",
    category: "Portraits",
    size: 'normal'
  },
  {
    id: 5,
    title: "Wedding Collection",
    description: "Special pieces for your big day",
    imageUrl: "/placeholder.svg",
    category: "Wedding",
    size: 'wide'
  },
  {
    id: 6,
    title: "Home Decor",
    description: "Artistic pieces for your living space",
    imageUrl: "/placeholder.svg",
    category: "Home",
    size: 'normal'
  }
];

export function BentoGallery() {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'tall':
        return 'bento-item-tall';
      case 'wide':
        return 'bento-item-wide';
      case 'large':
        return 'bento-item-large';
      default:
        return '';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Gallery Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of handcrafted items, each piece telling its own unique story
          </p>
        </div>
        
        <div className="bento-grid max-w-7xl mx-auto">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className={`bento-item ${getSizeClasses(item.size)} group`}
            >
              <div className="relative h-full min-h-[200px]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-medium text-accent mb-1">{item.category}</div>
                  <h3 className="font-playfair font-medium text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
