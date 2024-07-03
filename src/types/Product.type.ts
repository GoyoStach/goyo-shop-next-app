export type ProductSimple = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price?: string;
  currency?: string;
  previousPrice?: string;
  images: string[];
};
