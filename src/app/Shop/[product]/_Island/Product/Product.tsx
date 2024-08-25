import ProductContent from '@/app/Shop/[product]/_Island/Product/ProductContent';
import { ProductSimple } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { promises as fs } from 'fs';

const getData = async () => {
  await delay(4000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/products.json',
    'utf8',
  );
  const data: ProductSimple[] = JSON.parse(mockData);
  await delay(3000);
  return data[0];
};

/**This is a fetch layer.
 * Is only used because client components cannot be async and handle fetching.
 * We therefore have a server component this one and another client one, ProductContent  */
const Product = async () => {
  const data = await getData();
  return <ProductContent data={data} />;
};
export default Product;
