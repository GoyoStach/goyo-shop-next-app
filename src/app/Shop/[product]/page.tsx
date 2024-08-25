import { ProductSimple } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { promises as fs } from 'fs';
import { type NextPage } from 'next';
import { Suspense } from 'react';
import ProductPageContent from './_Island/ProductPageContent';

const getData = async () => {
  await delay(1000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/products.json',
    'utf8',
  );
  const data: ProductSimple[] = JSON.parse(mockData);
  await delay(3000);
  return data[0];
};

const IndividualProductPage: NextPage = async () => {
  const data = await getData();
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductPageContent data={data} />
      </Suspense>
    </main>
  );
};

export default IndividualProductPage;
