import ProductGrid from '@/components/shop/ProductGrid';
import { ProductSimple } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { promises as fs } from 'fs';

const getData = async () => {
  await delay(5000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/products.json',
    'utf8',
  );
  const data: ProductSimple[] = JSON.parse(mockData);
  return data;
};

/**This is a fetch layer.
 * Is only used because client components cannot be async and handle fetching.
 * We therefore have a server component this one and another client one, ProductContent  */
const SimilarProduct = async () => {
  const data = await getData();
  return <ProductGrid data={data} />;
};
export default SimilarProduct;
