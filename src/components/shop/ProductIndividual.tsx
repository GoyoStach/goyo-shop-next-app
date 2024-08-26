'use client';
import { ProductDetails } from '@/types/Product.type';
import { InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { FaEarthAfrica } from 'react-icons/fa6';
import { GiCoffeePot, GiMountaintop } from 'react-icons/gi';

type Props = {
  data: ProductDetails;
};

const mapValueToIcon = (value: string) => {
  switch (value) {
    case 'coffee_pot':
      return GiCoffeePot;
    case 'coffee':
      return BiSolidCoffeeBean;
    case 'africa':
      return FaEarthAfrica;
    case 'mountain':
      return GiMountaintop;
    default:
      break;
  }
};

const ProductIndividual: FC<Props> = ({ data }) => {
  return (
    <Center p={12}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
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
          height={{ base: 230, lg: 230 * 2 }}
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
            height={{ base: 230, lg: 230 * 2 }}
            width={{ base: 282, lg: 282 * 2 }}
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
          <Text
            fontSize={'sm'}
            fontStyle={'italic'}
            align={['justify']}
          >
            {data.description}
          </Text>
        </Stack>
        {/**Feature descriptions */}
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
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
        <Box>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)' }}
            gap={2}
          >
            {data.features.map((e, _index) => {
              return (
                <Stack
                  padding={2}
                  direction={'row'}
                  alignItems={'center'}
                  key={_index}
                  rounded={'lg'}
                  //bg={useColorModeValue('cappucino.50', 'gray.700')}
                >
                  {e.icon ? (
                    <Icon
                      as={mapValueToIcon(e.icon)}
                      boxSize={8}
                    />
                  ) : (
                    <InfoIcon boxSize={8} />
                  )}
                  <Divider orientation="vertical" />
                  <Stack
                    direction={'column'}
                    gap={0}
                    textAlign={'start'}
                    maxW={'200px'}
                  >
                    <Text
                      color={'gray.500'}
                      fontSize={'lg'}
                      overflow={'hidden'}
                    >
                      {e.title}
                    </Text>
                    <Text
                      color={'gray.500'}
                      fontSize={'sm'}
                    >
                      {e.description}
                    </Text>
                  </Stack>
                </Stack>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Center>
  );
};

export default ProductIndividual;
