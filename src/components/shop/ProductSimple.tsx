import { ProductSimple } from '@/types/Product.type';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  product: ProductSimple;
};

const ProductSimpleComponent: FC<Props> = ({ product }) => {
  return (
    <Center py={12}>
      <Link
        href={{
          pathname: `/Shop/${product.id}`,
        }}
      >
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('cappucino.50', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(/mockImages${
                product.images[0]
              }),url('/placeholder.jpg')`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={`/mockImages${product.images[0]}`}
              alt={product.name}
              fallbackSrc={'/placeholder.jpg'}
            />
          </Box>
          <Stack
            pt={10}
            align={'center'}
            textAlign={'center'}
          >
            <Text
              color={'accent.400'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              {product.brand}
            </Text>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
            >
              {product.name}
            </Heading>

            <Stack
              direction={'row'}
              align={'center'}
            >
              <Text
                fontWeight={800}
                fontSize={'xl'}
              >
                {product.price} €
              </Text>
              <Text textDecoration={'line-through'}>
                {product.previousPrice} €
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
};

export default ProductSimpleComponent;
