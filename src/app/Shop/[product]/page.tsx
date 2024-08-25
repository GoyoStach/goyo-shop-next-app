import Product from '@/app/Shop/[product]/_Island/Product/Product';
import { type NextPage } from 'next';
import { Suspense } from 'react';

/**We are using here component streaming.
 * The goal is to be ready once PPR will be available and have defined structure for it.
 */
const IndividualProductPage: NextPage = async () => {
  return (
    <main>
      <h1>Static rendered title</h1>
      <Suspense fallback={<p>Loading product details</p>}>
        <Product />
      </Suspense>
    </main>
  );
};

export default IndividualProductPage;
