'use client';
import { ProductSimple } from '@/types/Product.type';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import type { FC } from 'react';

type Props = {
  data: ProductSimple;
};

const ProductIndividual: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Center p={12}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
        role={'group'}
        p={6}
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
          height={{ base: 230, xl: 230 * 2 }}
          justifyContent={'center'}
          display="flex"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(/mockImages${
              data.images[0]
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
            height={{ base: 230, xl: 230 * 2 }}
            width={{ base: 282, xl: 282 * 2 }}
            objectFit={'cover'}
            src={`/mockImages${data.images[0]}`}
            alt={data.name}
            fallbackSrc={'/placeholder.jpg'}
          />
        </Box>
        <Stack
          p={6}
          align={'left'}
          textAlign={'justify'}
        >
          <Text
            color={'accent.400'}
            fontSize={'lg'}
            textTransform={'uppercase'}
            align={['center', 'center', 'center', 'center', 'left']}
          >
            {data.brand}
          </Text>
          <Stack
            direction={'row'}
            align={'center'}
            justifyContent={['center', 'center', 'center', 'center', 'left']}
          >
            <Text
              fontWeight={800}
              fontSize={'xl'}
            >
              {data.price} {data.currency}
            </Text>
            <Text textDecoration={'line-through'}>
              {data.previousPrice} {data.currency}
            </Text>
          </Stack>
        </Stack>
        {/**Feature descriptions */}
        <GridItem
          colSpan={{ base: 1, xl: 2 }}
          paddingY={[2, 4, 6, 8, 10]}
        >
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            justifyContent={'center'}
            display={'flex'}
          >
            Features
          </Heading>
        </GridItem>
        {/* {data.attributes.details?.map((e) => {
          return (
            <Stack
              p={6}
              key={e.id}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'center'}
            >
              <Text
                color={'gray.500'}
                fontSize={'lg'}
              >
                {e.value}
              </Text>
              <Image
                rounded={'lg'}
                height={[24, 24, 24, 36, 48]}
                width={[24, 24, 24, 36, 48]}
                objectFit={'cover'}
                src={e.icon}
                alt={e.value}
                fallbackSrc={'/placeholder.jpg'}
              />
            </Stack>
          );
        })} */}
      </Grid>
    </Center>
  );
};

export default ProductIndividual;
