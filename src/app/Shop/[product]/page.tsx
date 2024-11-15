import Product from '@/app/Shop/[product]/_Island/Product/Product';
import SimilarProduct from '@/app/Shop/[product]/_Island/Product/SimilarProduct';
import Loading from '@/app/Shop/loading';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { type NextPage } from 'next';
import { Suspense } from 'react';

/**We are using here component streaming.
 * The goal is to be ready once PPR will be available and have defined structure for it.
 */
const IndividualProductPage: NextPage = async () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
      <Flex direction="column">
        <Container maxW={'6xl'}>
          <Heading>Related Products :</Heading>
          <Suspense fallback={<div>Loading...</div>}>
            <SimilarProduct />
          </Suspense>
        </Container>
      </Flex>
    </main>
  );
};

export default IndividualProductPage;
