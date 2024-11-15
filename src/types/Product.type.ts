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

export type ProductDetails = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price?: string;
  currency?: string;
  previousPrice?: string;
  images: string[];
  features: Feature[];
  pricingDetails: {
    size: string;
    price: string;
  }[];
};

type Feature = {
  title: string;
  description: string;
  icon?: string;
};
