export type Product = {
  slug: string;
  name: string;
  price: number; // USD, as on original site
  category: "merch" | "music" | "ebooks";
  images: string[];
  description: string;
  details?: string[];
  digital?: boolean; // download after purchase
  file?: string; // path in /assets for digital products
  external?: string; // note for B2B/Alibaba items on the original store
};

export const products: Product[] = [
  {
    slug: "your-hope-is-not-lost-ebook",
    name: "YOUR HOPE IS NOT LOST — eBook",
    price: 8.99,
    category: "ebooks",
    images: ["/assets/1000196661.jpg"],
    description:
      "A book of hope, by George Enock Mbendera. Because Jesus is alive and your hope is not lost, it is not a matter of how big the storm is but of how big the Prince of peace is.",
    digital: true,
    file: "/assets/your-hope-is-not-lost.pdf",
  },
  {
    slug: "are-you-ready",
    name: "Are You Ready",
    price: 3.29,
    category: "music",
    images: ["/assets/1000146286-2.jpg"],
    description:
      "George Mbendera & The Zion Choir — Are You Ready. A call to be ready for the coming of the Lord.",
    digital: true,
    file: "/assets/are-you-ready.mp3",
  },
  {
    slug: "asalire",
    name: "Asalire",
    price: 3.29,
    category: "music",
    images: ["/assets/1000236198-1.jpg"],
    description:
      "Asalire by George Mbendera. Malawian traditional (Yao) sound carried by Christian faith, released for the nations.",
    digital: true,
  },
  {
    slug: "backpack",
    name: "Backpack",
    price: 72.5,
    category: "merch",
    images: [
      "/assets/all-over-print-backpack-white-front-6a5fa5f327383.jpg",
      "/assets/all-over-print-duffle-bag-white-back-6a5fc36e40506.jpg",
    ],
    description:
      "This medium size backpack is just what you need for daily use or sports activities! The pockets (including one for your laptop) give plenty of room for all your necessities, while the water-resistant material will protect them from the weather.",
    details: [
      "Made from 100% polyester",
      "Dimensions: H 16⅛” (41cm), W 12¼” (31cm), D 3⅞” (10cm)",
      "Water-resistant material",
    ],
  },
  {
    slug: "bucket-hat",
    name: "Bucket Hat",
    price: 21.5,
    category: "merch",
    images: [
      "/assets/bucket-hat-i-big-accessories-bx003-black-front-6a5fbf83acbda.jpg",
      "/assets/bucket-hat-i-big-accessories-bx003-navy-left-front-6a663cbf6712c.jpg",
    ],
    description:
      "Combine practicality, comfort, and fashion in one. Keep the sun out of your eyes with this 100% cotton twill bucket hat. Cotton fabric and sewn eyelets are sure to help you stay cool during any activity, be it a stroll in the park or an intense game of sports.",
    details: ["100% cotton twill", "3 ¾″ (7.6 cm) crown", "Sewn eyelets"],
  },
  {
    slug: "copper-vacuum-insulated-bottle",
    name: "Copper Vacuum Insulated Bottle",
    price: 33.5,
    category: "merch",
    images: [
      "/assets/copper-vacuum-insulated-bottle-22oz-black-22oz-front-6a5fc583064d9.jpg",
      "/assets/copper-vacuum-insulated-bottle-22oz-black-22oz-back-6a6113f435fef.jpg",
    ],
    description:
      "Stay refreshed on the go with our copper vacuum-insulated bottle, designed to keep your drinks at the perfect temperature while preventing condensation. Its durable stainless steel construction with a powder-coat finish is scratch and fade-resistant.",
    details: [
      "Stainless steel with copper insulation",
      "22 oz. (650 ml)",
      "Spill-proof design and wide opening",
    ],
  },
  {
    slug: "duffle-bag",
    name: "Duffle Bag",
    price: 89.5,
    category: "merch",
    images: ["/assets/all-over-print-duffle-bag-white-back-6a5fc36e40506.jpg"],
    description:
      "This duffle bag is the perfect companion for every occasion—take it with you when traveling, running daily errands, or going to the gym. The bag is spacious and will keep all your stuff neat and organized with its multiple pockets, including one with a zipper for your most valuable possessions.",
    details: [
      "100% polyester with black interlining",
      "Fabric weight: 9 oz./yd.² (305 g/m²)",
      "Adjustable padded shoulder strap",
    ],
  },
  {
    slug: "eco-tote-bag",
    name: "Eco Tote Bag",
    price: 24.0,
    category: "merch",
    images: [
      "/assets/eco-tote-bag-black-front-6a5fce39a99a5.jpg",
      "/assets/eco-tote-bag-black-front-6a60b48429c04.jpg",
    ],
    description:
      "Say goodbye to plastic, and bag your goodies in this organic cotton tote bag. There’s more than enough room for groceries, books, and anything in between.",
    details: [
      "100% certified organic cotton 3/1 twill",
      "Fabric weight: 8 oz/yd² (272 g/m²)",
    ],
  },
  {
    slug: "fanny-pack",
    name: "Fanny Pack",
    price: 35.0,
    category: "merch",
    images: ["/assets/all-over-print-fanny-pack-white-front-6a5fc911a1cae.jpg"],
    description:
      "Fanny pack is the ultimate accessory for people on the go. And this waist bag has everything—the right size, a small inside pocket, and adjustable straps—to become your favorite fashion item if you’re going to a festival, getting ready for a vacation, or just like to keep your hands free.",
    details: [
      "100% polyester",
      "Fabric weight: 9 oz./yd.² (305 g/m²)",
      "Small inside pocket, adjustable straps",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}
