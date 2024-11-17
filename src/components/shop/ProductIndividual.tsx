'use client';
import { ProductDetails } from '@/types/Product.type';
import { InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, type FC } from 'react';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { FaEarthAfrica, FaEarthAsia } from 'react-icons/fa6';
import { GiCoffeePot, GiMountaintop } from 'react-icons/gi';

type Props = {
  data: ProductDetails;
};

const mapValueToIcon = (value: string) => {
  switch (value) {
    case 'asia':
      return FaEarthAsia;
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
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState({
    size: '100',
    price: '12',
  });
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
              {parseInt(selectedSize.price ?? '0')} {data.currency}
            </Text>
            <Text
              fontWeight={800}
              fontSize={'x-small'}
            >
              for {selectedSize.size}g
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
        <Box>
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            justifyContent={'center'}
            display={'flex'}
            paddingY={[2, 4, 6, 8, 10]}
          >
            Features
          </Heading>
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
                >
                  {e.icon ? (
                    <Icon
                      as={mapValueToIcon(e.icon)}
                      boxSize={8}
                      color={'cappucino.500'}
                    />
                  ) : (
                    <InfoIcon boxSize={8} />
                  )}
                  <Divider
                    orientation="vertical"
                    borderColor={useColorModeValue(
                      'cappucino.900',
                      'cappucino.50',
                    )}
                  />
                  <Stack
                    direction={'column'}
                    gap={0}
                    textAlign={'start'}
                    maxW={'200px'}
                  >
                    <Text
                      fontSize={'lg'}
                      overflow={'hidden'}
                    >
                      {e.title}
                    </Text>
                    <Text fontSize={'sm'}>{e.description}</Text>
                  </Stack>
                </Stack>
              );
            })}
          </Grid>
        </Box>

        <Box pt={4}>
          <Flex
            direction={'column'}
            alignItems={'start'}
            justifyContent={'flex-end'}
            h={'full'}
            gap={4}
          >
            <Divider
              borderColor={useColorModeValue('cappucino.900', 'cappucino.100')}
            />
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              w={'full'}
            >
              <Heading>Size :</Heading>
              <Stack
                direction={'row'}
                alignItems={'center'}
              >
                {data.pricingDetails.map((pricingPossibilities) => (
                  <Stack
                    p={2}
                    w={'full'}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    backgroundColor={
                      pricingPossibilities.size === selectedSize.size
                        ? 'accent.300'
                        : 'accent.500'
                    }
                    rounded={'lg'}
                    as={Button}
                    _hover={{ bgColor: 'accent.300' }}
                    onClick={() => setSelectedSize(pricingPossibilities)}
                    disabled={amount === 1}
                    key={pricingPossibilities.price}
                  >
                    <Text>{pricingPossibilities.size}g</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              w={'full'}
            >
              <Heading>Quantity :</Heading>
              <Stack
                direction={'row'}
                alignItems={'center'}
              >
                <Stack
                  p={2}
                  w={'full'}
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  backgroundColor={'accent.500'}
                  rounded={'lg'}
                  as={Button}
                  onClick={() => setAmount(amount - 1)}
                  isDisabled={amount === 1}
                  _hover={{ bgColor: 'accent.300' }}
                >
                  <FaMinus />
                </Stack>
                <Heading>{amount}</Heading>
                <Stack
                  p={2}
                  w={'full'}
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  backgroundColor={'accent.500'}
                  as={Button}
                  rounded={'lg'}
                  onClick={() => setAmount(amount + 1)}
                  _hover={{ bgColor: 'accent.300' }}
                >
                  <FaPlus />
                </Stack>
              </Stack>
            </Stack>

            <Divider
              borderColor={useColorModeValue('cappucino.900', 'cappucino.100')}
            />
            <Stack
              direction={'row'}
              gap={8}
              w={'full'}
            >
              <Stack
                direction={'column'}
                w={'full'}
              >
                <Heading>Total :</Heading>
                <Heading fontSize={'xx-large'}>
                  {parseInt(selectedSize.price) * amount}
                  {data.currency}
                </Heading>
              </Stack>

              <Stack
                p={6}
                w={'full'}
                h={'full'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'cappucino.500'}
                rounded={'lg'}
                as={Button}
              >
                <FaShoppingCart />
                <Stack
                  direction={'column'}
                  gap={0}
                  textAlign={'start'}
                  maxW={'200px'}
                >
                  <Text
                    fontSize={'lg'}
                    overflow={'hidden'}
                  >
                    Add To Cart !
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Grid>
    </Center>
  );
};

export default ProductIndividual;
