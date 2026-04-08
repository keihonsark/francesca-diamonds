export interface Product {
  id: string;
  name: string;
  category: "Rings" | "Necklaces" | "Bracelets" | "Earrings";
  metal: "Yellow Gold" | "White Gold" | "Rose Gold" | "Platinum";
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aurelia Solitaire Ring",
    category: "Rings",
    metal: "Yellow Gold",
    description: "A timeless solitaire setting in warm 18k yellow gold, designed to let your center stone shine. Delicate and refined, perfect for the modern bride.",
    image: "/images/products/ring-1.svg",
  },
  {
    id: "2",
    name: "Luna Pendant Necklace",
    category: "Necklaces",
    metal: "White Gold",
    description: "A crescent-inspired pendant in 14k white gold, adorned with pavé diamonds that catch the light beautifully. Elegant for everyday or evening wear.",
    image: "/images/products/necklace-1.svg",
  },
  {
    id: "3",
    name: "Seraphina Tennis Bracelet",
    category: "Bracelets",
    metal: "Rose Gold",
    description: "A classic tennis bracelet reimagined in 18k rose gold with hand-set brilliant-cut diamonds. Fluid, feminine, and endlessly versatile.",
    image: "/images/products/bracelet-1.svg",
  },
  {
    id: "4",
    name: "Celeste Drop Earrings",
    category: "Earrings",
    metal: "Platinum",
    description: "Sculptural drop earrings in platinum with pear-shaped diamond accents. A statement of effortless sophistication.",
    image: "/images/products/earring-1.svg",
  },
  {
    id: "5",
    name: "Aria Halo Ring",
    category: "Rings",
    metal: "White Gold",
    description: "A radiant halo setting in 18k white gold, embracing the center stone with a circle of micro-pavé diamonds. Romantic and luminous.",
    image: "/images/products/ring-2.svg",
  },
  {
    id: "6",
    name: "Isla Layering Necklace",
    category: "Necklaces",
    metal: "Yellow Gold",
    description: "A delicate chain in 14k yellow gold with a bezel-set diamond station. Perfect for layering or wearing alone.",
    image: "/images/products/necklace-2.svg",
  },
  {
    id: "7",
    name: "Valentina Cuff Bracelet",
    category: "Bracelets",
    metal: "Yellow Gold",
    description: "A sculptural cuff in 18k yellow gold with organic curves and a satin finish. Bold yet refined.",
    image: "/images/products/bracelet-2.svg",
  },
  {
    id: "8",
    name: "Eloise Stud Earrings",
    category: "Earrings",
    metal: "Rose Gold",
    description: "Petite cluster studs in 14k rose gold with brilliant-cut diamonds arranged in a floral motif. Delicate daily luxury.",
    image: "/images/products/earring-2.svg",
  },
  {
    id: "9",
    name: "Bianca Three-Stone Ring",
    category: "Rings",
    metal: "Platinum",
    description: "A three-stone ring in platinum representing past, present, and future. Timeless symbolism meets modern design.",
    image: "/images/products/ring-3.svg",
  },
  {
    id: "10",
    name: "Sienna Choker",
    category: "Necklaces",
    metal: "Rose Gold",
    description: "A modern choker in 14k rose gold with a single floating diamond. Minimalist elegance for the contemporary woman.",
    image: "/images/products/necklace-3.svg",
  },
  {
    id: "11",
    name: "Camille Bangle",
    category: "Bracelets",
    metal: "White Gold",
    description: "A slim bangle in 18k white gold with scattered diamond accents. Effortlessly chic, perfect for stacking.",
    image: "/images/products/bracelet-3.svg",
  },
  {
    id: "12",
    name: "Vivienne Huggie Earrings",
    category: "Earrings",
    metal: "Yellow Gold",
    description: "Sleek huggie hoops in 14k yellow gold lined with channel-set diamonds. Modern, comfortable, and endlessly wearable.",
    image: "/images/products/earring-3.svg",
  },
];
