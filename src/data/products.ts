
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'phone-cover' | 'handcrafted';
  gender?: 'men' | 'women' | 'unisex';
  bestSeller: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Product Name 1",
    description: "Details about the product, including its unique features and benefits.",
    price: 609,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "women",
    bestSeller: true,
  },
  {
    id: "2",
    name: "Product Name 2",
    description: "Details about the product, including its unique features and benefits.",
    price: 299,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "unisex",
    bestSeller: true,
  },
  {
    id: "3",
    name: "Product Name 3",
    description: "Details about the product, including its unique features and benefits.",
    price: 399,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "unisex",
    bestSeller: false,
  },
  {
    id: "4",
    name: "Product Name 4",
    description: "Details about the product, including its unique features and benefits.",
    price: 499,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "unisex",
    bestSeller: true,
  },
  {
    id: "5",
    name: "Product Name 5",
    description: "Details about the product, including its unique features and benefits.",
    price: 699,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "handcrafted",
    gender: "women",
    bestSeller: true,
  },
  {
    id: "6",
    name: "Product Name 6",
    description: "Details about the product, including its unique features and benefits.",
    price: 599,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "handcrafted",
    gender: "unisex",
    bestSeller: false,
  },
  {
    id: "7",
    name: "Product Name 7",
    description: "Details about the product, including its unique features and benefits.",
    price: 599,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "handcrafted",
    gender: "unisex",
    bestSeller: false,
  },
  {
    id: "8",
    name: "Product Name 8",
    description: "Details about the product, including its unique features and benefits.",
    price: 199,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "unisex",
    bestSeller: true,
  },
  {
    id: "9",
    name: "Product Name 9",
    description: "Details about the product, including its unique features and benefits.",
    price: 699,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "handcrafted",
    gender: "unisex",
    bestSeller: true,
  },
  {
    id: "10",
    name: "Product Name 10",
    description: "Custom hand-drawn zodiac design on a premium phone case.",
    price: 499,
    imageUrl: "https://i.pinimg.com/736x/72/01/bc/7201bcfe8afee04a37b03f167bd34651.jpg",
    category: "phone-cover",
    gender: "unisex",
    bestSeller: false,
  },
  // {
  //   id: "11",
  //   name: "Leather Wallet",
  //   description: "Hand-stitched leather wallet with multiple card slots.",
  //   price: 45.99,
  //   imageUrl: "https://i.pinimg.com/236x/d6/4a/64/d64a6438edfd1cf0e22af6f840d99c57.jpg",
  //   category: "handcrafted",
  //   gender: "men",
  //   bestSeller: true,
  // },
  // {
  //   id: "12",
  //   name: "Wooden Bow Tie",
  //   description: "Handcrafted wooden bow tie with adjustable strap.",
  //   price: 29.99,
  //   imageUrl: "https://i.pinimg.com/236x/38/9f/f4/389ff47bdfc9b0cf5b4b2109f650f287.jpg",
  //   category: "handcrafted",
  //   gender: "men",
  //   bestSeller: false,
  // },
  // {
  //   id: "13",
  //   name: "Minimalist Phone Cover",
  //   description: "Clean, minimalist design for the modern gentleman.",
  //   price: 24.99,
  //   imageUrl: "https://i.pinimg.com/236x/bc/43/65/bc43657d4db50e5436712bac396635bb.jpg",
  //   category: "phone-cover",
  //   gender: "men",
  //   bestSeller: true,
  // },
  // {
  //   id: "14",
  //   name: "Handmade Cufflinks",
  //   description: "Unique handcrafted cufflinks with custom engraving option.",
  //   price: 32.99,
  //   imageUrl: "https://i.pinimg.com/236x/40/85/96/408596d58dbc73c32a28202a136101d2.jpg",
  //   category: "handcrafted",
  //   gender: "men",
  //   bestSeller: false,
  // }
];

export const getBestSellers = () => products.filter(product => product.bestSeller);
export const getPhoneCovers = () => products.filter(product => product.category === 'phone-cover');
export const getHandcrafted = () => products.filter(product => product.category === 'handcrafted');
export const getMensProducts = () => products.filter(product => product.gender === 'men' || product.gender === 'unisex');
export const getWomensProducts = () => products.filter(product => product.gender === 'women' || product.gender === 'unisex');
