import Product from '@/app/Shop/[product]/_Island/Product/Product';
import { type NextPage } from 'next';
import { Suspense } from 'react';

/**We are using here component streaming.
 * The goal is to be ready once PPR will be available and have defined structure for it.
 */
const IndividualProductPage: NextPage = async () => {
  return (
    <main>
      <Suspense fallback={<p>Loading product details</p>}>
        <Product />
      </Suspense>
    </main>
  );
};

export default IndividualProductPage;
