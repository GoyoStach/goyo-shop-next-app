import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductGrid from '@/components/shop/ProductGrid';
import { ProductSimple } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { Spacer } from '@chakra-ui/react';
import { NextPage } from 'next';
import { promises as fs } from 'fs';

const getData = async () => {
  await delay(2000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/products.json',
    'utf8',
  );
  const data: ProductSimple[] = JSON.parse(mockData);
  return data;
};

const ShopPage: NextPage = async () => {
  const data = await getData();
  return (
    <main>
      <Header />
      <Spacer />
      <ProductGrid data={data} />
      <Spacer />
      <Footer />
    </main>
  );
};

export default ShopPage;
