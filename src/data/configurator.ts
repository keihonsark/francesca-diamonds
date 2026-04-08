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
  image: string;
}

export const configuratorSteps: ConfigStep[] = [
  {
    id: 1,
    key: "type",
    title: "What are you looking for?",
    subtitle: "Select the type of piece you'd like to create.",
    image: "/images/configurator/step-type.svg",
    options: [
      { value: "engagement-ring", label: "Engagement Ring", image: "/images/configurator/type-engagement.svg" },
      { value: "wedding-band", label: "Wedding Band", image: "/images/configurator/type-wedding.svg" },
      { value: "necklace", label: "Necklace", image: "/images/configurator/type-necklace.svg" },
      { value: "bracelet", label: "Bracelet", image: "/images/configurator/type-bracelet.svg" },
      { value: "earrings", label: "Earrings", image: "/images/configurator/type-earrings.svg" },
      { value: "other", label: "Other", image: "/images/configurator/type-other.svg" },
    ],
  },
  {
    id: 2,
    key: "occasion",
    title: "What's the occasion?",
    subtitle: "Help us understand the story behind your piece.",
    image: "/images/configurator/step-occasion.svg",
    options: [
      { value: "engagement", label: "Engagement", image: "/images/configurator/occ-engagement.svg" },
      { value: "wedding", label: "Wedding", image: "/images/configurator/occ-wedding.svg" },
      { value: "anniversary", label: "Anniversary", image: "/images/configurator/occ-anniversary.svg" },
      { value: "birthday", label: "Birthday", image: "/images/configurator/occ-birthday.svg" },
      { value: "self-purchase", label: "Self Purchase", image: "/images/configurator/occ-self.svg" },
      { value: "gift", label: "Gift", image: "/images/configurator/occ-gift.svg" },
    ],
  },
  {
    id: 3,
    key: "metal",
    title: "Choose your metal",
    subtitle: "Each metal brings its own warmth and character.",
    image: "/images/configurator/step-metal.svg",
    options: [
      { value: "yellow-gold", label: "Yellow Gold", image: "/images/configurator/metal-yellow.svg" },
      { value: "white-gold", label: "White Gold", image: "/images/configurator/metal-white.svg" },
      { value: "rose-gold", label: "Rose Gold", image: "/images/configurator/metal-rose.svg" },
      { value: "platinum", label: "Platinum", image: "/images/configurator/metal-platinum.svg" },
    ],
  },
  {
    id: 4,
    key: "style",
    title: "What's your style?",
    subtitle: "Select the aesthetic that speaks to you.",
    image: "/images/configurator/step-style.svg",
    options: [
      { value: "classic", label: "Classic", image: "/images/configurator/style-classic.svg" },
      { value: "modern", label: "Modern", image: "/images/configurator/style-modern.svg" },
      { value: "vintage", label: "Vintage", image: "/images/configurator/style-vintage.svg" },
      { value: "minimalist", label: "Minimalist", image: "/images/configurator/style-minimalist.svg" },
      { value: "glamorous", label: "Glamorous", image: "/images/configurator/style-glamorous.svg" },
    ],
  },
  {
    id: 5,
    key: "centerStone",
    title: "Center stone preference",
    subtitle: "Would you like a center stone in your piece?",
    image: "/images/configurator/step-stone.svg",
    conditional: { step: "type", values: ["engagement-ring", "necklace", "earrings"] },
    options: [
      { value: "diamond", label: "Diamond", image: "/images/configurator/stone-diamond.svg" },
      { value: "moissanite", label: "Moissanite", image: "/images/configurator/stone-moissanite.svg" },
      { value: "sapphire", label: "Sapphire", image: "/images/configurator/stone-sapphire.svg" },
      { value: "emerald", label: "Emerald", image: "/images/configurator/stone-emerald.svg" },
      { value: "ruby", label: "Ruby", image: "/images/configurator/stone-ruby.svg" },
      { value: "other", label: "Other", image: "/images/configurator/stone-other.svg" },
    ],
  },
  {
    id: 6,
    key: "diamondShape",
    title: "Diamond shape",
    subtitle: "Each shape tells a different story.",
    image: "/images/configurator/step-shape.svg",
    conditional: { step: "centerStone", values: ["diamond", "moissanite"] },
    options: [
      { value: "round", label: "Round", image: "/images/configurator/shape-round.svg" },
      { value: "oval", label: "Oval", image: "/images/configurator/shape-oval.svg" },
      { value: "cushion", label: "Cushion", image: "/images/configurator/shape-cushion.svg" },
      { value: "emerald", label: "Emerald", image: "/images/configurator/shape-emerald.svg" },
      { value: "pear", label: "Pear", image: "/images/configurator/shape-pear.svg" },
      { value: "marquise", label: "Marquise", image: "/images/configurator/shape-marquise.svg" },
      { value: "radiant", label: "Radiant", image: "/images/configurator/shape-radiant.svg" },
    ],
  },
  {
    id: 7,
    key: "caratRange",
    title: "Carat range",
    subtitle: "Select your preferred carat weight range.",
    image: "/images/configurator/step-carat.svg",
    conditional: { step: "centerStone", values: ["diamond", "moissanite", "sapphire", "emerald", "ruby"] },
    options: [
      { value: "0.5-1.0", label: "0.5 – 1.0 ct", image: "/images/configurator/carat-small.svg" },
      { value: "1.0-1.5", label: "1.0 – 1.5 ct", image: "/images/configurator/carat-medium.svg" },
      { value: "1.5-2.0", label: "1.5 – 2.0 ct", image: "/images/configurator/carat-large.svg" },
      { value: "2.0-3.0", label: "2.0 – 3.0 ct", image: "/images/configurator/carat-xlarge.svg" },
      { value: "3.0+", label: "3.0+ ct", image: "/images/configurator/carat-statement.svg" },
    ],
  },
  {
    id: 8,
    key: "budget",
    title: "What's your budget?",
    subtitle: "This helps us curate the best options for you.",
    image: "/images/configurator/step-budget.svg",
    options: [
      { value: "under-5k", label: "Under $5,000", image: "/images/configurator/budget-1.svg" },
      { value: "5k-10k", label: "$5,000 – $10,000", image: "/images/configurator/budget-2.svg" },
      { value: "10k-20k", label: "$10,000 – $20,000", image: "/images/configurator/budget-3.svg" },
      { value: "20k-50k", label: "$20,000 – $50,000", image: "/images/configurator/budget-4.svg" },
      { value: "50k+", label: "$50,000+", image: "/images/configurator/budget-5.svg" },
    ],
  },
  {
    id: 9,
    key: "notes",
    title: "Any additional details?",
    subtitle: "Tell us more about your dream piece.",
    image: "/images/configurator/step-notes.svg",
    options: [],
  },
  {
    id: 10,
    key: "summary",
    title: "Your custom piece",
    subtitle: "Review your selections and submit your inquiry.",
    image: "/images/configurator/step-summary.svg",
    options: [],
  },
];
