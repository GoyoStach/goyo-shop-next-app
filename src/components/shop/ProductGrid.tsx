'use client';
import { ProductSimple } from '@/types/Product.type';
import { zoomIn } from '@/utils/motion';
import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ProductSimpleComponent from './ProductSimple';

type Props = {
  data: ProductSimple[];
};

const ProductGrid: React.FC<Props> = ({ data }) => {
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={6}
      p={2}
    >
      {data.map((product, index) => {
        return (
          <motion.div
            key={product.id}
            variants={zoomIn(index * 0.1, 1)}
            initial="hidden"
            whileInView={'show'}
          >
            <ProductSimpleComponent product={product} />
          </motion.div>
        );
      })}
    </Grid>
  );
};
export default ProductGrid;
