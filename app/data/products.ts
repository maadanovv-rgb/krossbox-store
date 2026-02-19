export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: "Nike" | "Adidas" | "New Balance" | "Puma" | "Asics" | "Other";
  category: "Кроссовки" | "Кеды" | "Ботинки" | "Сланцы" | "Аксессуары";
   gender: "men" | "women";
  price: number;
  oldPrice?: number;
  sizes: number[];
  inStock: boolean;
  tags?: ("new" | "hit" | "sale")[];
  images: string[];
};


export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "nike-air-max-97-black",
    title: "Nike Air Max 97 Black",
    brand: "Nike",
    category: "Кроссовки",
    gender: "men",
    price: 6900,
    oldPrice: 7900,
    sizes: [40, 41, 42, 43],
    inStock: true,
    tags: ["hit"],
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"],
  },
  {
    id: "p2",
    slug: "adidas-campus-00s-grey",
    title: "Adidas Campus 00s Grey",
    brand: "Adidas",
    category: "Кеды",
    gender: "women",
    price: 8500,
    sizes: [39, 40, 41, 42],
    inStock: true,
    tags: ["hit"],
    images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1200&q=80"],
  },
  {
    id: "p3",
    slug: "new-balance-530-white-silver",
    title: "New Balance 530 White/Silver",
    brand: "New Balance",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["hit"],
    images: ["https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=1200&q=80"],
  },
    {
    id: "p4",
    slug: "new-balance-530-white-silver",
    title: "New Balance NB204L silver",
    brand: "New Balance",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["new"],
    images: [`/NB204L 1.webp`],
  },
  {
    id: "p5",
    slug: "new-balance-nbl204l-white-silver",
    title: "New Balance NB204L dark",
    brand: "New Balance",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["new"],
    images: [`/NB204L 2.webp`],
  },
  {
    id: "p6",
    slug: "nike-air-jordan-1",
    title: "Nike air jordan 1",
    brand: "Nike",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["new"],
    images: [`/Nike air 1.webp`],
  },
   {
    id: "p7",
    slug: "nike-air-jordan-1",
    title: "Nike air jordan 1 fd",
    brand: "Nike",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["hit"],
    images: [`/Nike air 2.webp`],
  },
  {
    id: "p8",
    slug: "nike-air-jordan-1-asd",
    title: "Nike air jordan 1 aas",
    brand: "Nike",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["new"],
    images: [`/Nike air 3.webp`],
  },
  {
    id: "p9",
     slug: "nike-air-jordan-1-1",
    title: "Nike air jordan retro",
    brand: "Nike",
    category: "Кроссовки",
    gender: "men",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    inStock: true,
    tags: ["new"],
    images: [`/Nike air retro .webp`],
  },
];
