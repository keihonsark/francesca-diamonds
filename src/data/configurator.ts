export interface ConfigStep {
  id: number;
  key: string;
  title: string;
  subtitle: string;
  image: string;
  options: ConfigOption[];
  conditional?: { step: string; values: string[] };
}

export interface ConfigOption {
  value: string;
  label: string;
  image: string | null;
}

export const configuratorSteps: ConfigStep[] = [
  {
    id: 1,
    key: "type",
    title: "What are you looking for?",
    subtitle: "Select the type of piece you'd like to create.",
    image: "/images/lifestyle/elegance.png",
    options: [
      { value: "engagement-ring", label: "Engagement Ring", image: "/images/products/gold-oval-ring.png" },
      { value: "wedding-band", label: "Wedding Band", image: "/images/products/rose-gold-engagement-ring.png" },
      { value: "necklace", label: "Necklace", image: "/images/products/gold-pendant-necklace.png" },
      { value: "bracelet", label: "Bracelet", image: "/images/products/rose-gold-bangle.png" },
      { value: "earrings", label: "Earrings", image: "/images/products/gold-layered-necklace.png" },
      { value: "other", label: "Other", image: "/images/lifestyle/serenity.png" },
    ],
  },
  {
    id: 2,
    key: "occasion",
    title: "What's the occasion?",
    subtitle: "Help us understand the story behind your piece.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [
      { value: "engagement", label: "Engagement", image: null },
      { value: "wedding", label: "Wedding", image: null },
      { value: "anniversary", label: "Anniversary", image: null },
      { value: "birthday", label: "Birthday", image: null },
      { value: "self-purchase", label: "Self Purchase", image: null },
      { value: "gift", label: "Gift", image: null },
    ],
  },
  {
    id: 3,
    key: "metal",
    title: "Choose your metal",
    subtitle: "Each metal brings its own warmth and character.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [
      { value: "yellow-gold", label: "Yellow Gold", image: null },
      { value: "white-gold", label: "White Gold", image: null },
      { value: "rose-gold", label: "Rose Gold", image: null },
      { value: "platinum", label: "Platinum", image: null },
    ],
  },
  {
    id: 4,
    key: "style",
    title: "What's your style?",
    subtitle: "Select the aesthetic that speaks to you.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [
      { value: "classic", label: "Classic", image: null },
      { value: "modern", label: "Modern", image: null },
      { value: "vintage", label: "Vintage", image: null },
      { value: "minimalist", label: "Minimalist", image: null },
      { value: "glamorous", label: "Glamorous", image: null },
    ],
  },
  {
    id: 5,
    key: "centerStone",
    title: "Center stone preference",
    subtitle: "Would you like a center stone in your piece?",
    image: "/images/lifestyle/glow-by-sea.png",
    conditional: { step: "type", values: ["engagement-ring", "necklace", "earrings"] },
    options: [
      { value: "diamond", label: "Diamond", image: null },
      { value: "moissanite", label: "Moissanite", image: null },
      { value: "sapphire", label: "Sapphire", image: null },
      { value: "emerald", label: "Emerald", image: null },
      { value: "ruby", label: "Ruby", image: null },
      { value: "other", label: "Other", image: null },
    ],
  },
  {
    id: 6,
    key: "diamondShape",
    title: "Diamond shape",
    subtitle: "Each shape tells a different story.",
    image: "/images/lifestyle/glow-by-sea.png",
    conditional: { step: "centerStone", values: ["diamond", "moissanite"] },
    options: [
      { value: "round", label: "Round", image: null },
      { value: "oval", label: "Oval", image: null },
      { value: "cushion", label: "Cushion", image: null },
      { value: "emerald", label: "Emerald", image: null },
      { value: "pear", label: "Pear", image: null },
      { value: "marquise", label: "Marquise", image: null },
      { value: "radiant", label: "Radiant", image: null },
    ],
  },
  {
    id: 7,
    key: "caratRange",
    title: "Carat range",
    subtitle: "Select your preferred carat weight range.",
    image: "/images/lifestyle/glow-by-sea.png",
    conditional: { step: "centerStone", values: ["diamond", "moissanite", "sapphire", "emerald", "ruby"] },
    options: [
      { value: "0.5-1.0", label: "0.5 – 1.0 ct", image: null },
      { value: "1.0-1.5", label: "1.0 – 1.5 ct", image: null },
      { value: "1.5-2.0", label: "1.5 – 2.0 ct", image: null },
      { value: "2.0-3.0", label: "2.0 – 3.0 ct", image: null },
      { value: "3.0+", label: "3.0+ ct", image: null },
    ],
  },
  {
    id: 8,
    key: "budget",
    title: "What's your budget?",
    subtitle: "This helps us curate the best options for you.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [
      { value: "under-5k", label: "Under $5,000", image: null },
      { value: "5k-10k", label: "$5,000 – $10,000", image: null },
      { value: "10k-20k", label: "$10,000 – $20,000", image: null },
      { value: "20k-50k", label: "$20,000 – $50,000", image: null },
      { value: "50k+", label: "$50,000+", image: null },
    ],
  },
  {
    id: 9,
    key: "notes",
    title: "Any additional details?",
    subtitle: "Tell us more about your dream piece.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [],
  },
  {
    id: 10,
    key: "summary",
    title: "Your custom piece",
    subtitle: "Review your selections and submit your inquiry.",
    image: "/images/lifestyle/glow-by-sea.png",
    options: [],
  },
];
