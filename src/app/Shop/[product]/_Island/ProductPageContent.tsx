'use client';

import ProductIndividual from '@/components/shop/ProductIndividual';
import { ProductSimple } from '@/types/Product.type';
import { zoomIn } from '@/utils/motion';
import {
  Container,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  data: ProductSimple;
};

const ProductPageContent: React.FC<Props> = ({ data }) => {
  return (
    <Flex
      direction="column"
      minH={'calc(100vh)'}
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

export default ProductPageContent;
