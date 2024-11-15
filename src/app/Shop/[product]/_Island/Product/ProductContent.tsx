'use client';

import ProductIndividual from '@/components/shop/ProductIndividual';
import { ProductDetails } from '@/types/Product.type';
import { zoomIn } from '@/utils/motion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  data: ProductDetails;
};

const ProductContent: React.FC<Props> = ({ data }) => {
  return (
    <Flex
      direction="column"
      minH={'calc(100vh)'}
      paddingTop={8}
    >
      <Container maxW={'6xl'}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={'/Shop'}
            >
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{data.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading>{data.name}</Heading>
      </Container>

      <Center
        as={motion.div}
        variants={zoomIn(0.1, 1)}
        initial="hidden"
        whileInView={'show'}
      >
        <ProductIndividual data={data} />
      </Center>
    </Flex>
  );
};

export default ProductContent;
