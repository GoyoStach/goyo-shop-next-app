import ProductContent from '@/app/Shop/[product]/_Island/Product/ProductContent';
import { ProductDetails } from '@/types/Product.type';
import { delay } from '@/utils/delay';
import { promises as fs } from 'fs';

const getData = async () => {
  await delay(3000);
  const mockData = await fs.readFile(
    process.cwd() + '/src/mockData/individual-product.json',
    'utf8',
  );
  const data: ProductDetails = JSON.parse(mockData);
  return data;
};

/**This is a fetch layer.
 * Is only used because client components cannot be async and handle fetching.
 * We therefore have a server component this one and another client one, ProductContent  */
const Product = async () => {
  const data = await getData();
  return <ProductContent data={data} />;
};
export default Product;
