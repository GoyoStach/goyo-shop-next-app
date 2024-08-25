import ProductGrid from '@/components/shop/ProductGrid';
import { ProductSimple } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { promises as fs } from 'fs';
import { NextPage } from 'next';

const getData = async () => {
  await delay(2000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/products.json',
    'utf8',
  );
  const data: ProductSimple[] = JSON.parse(mockData);
  return data;
};

/**As this page is made with only one "Island", it wont be necessary to use streaming and PPR.
 * We are here using SSR and the built in suspense strategies with the loading file.
 */
const ShopPage: NextPage = async () => {
  const data = await getData();
  return (
    <main>
      <ProductGrid data={data} />
    </main>
  );
};

export default ShopPage;
