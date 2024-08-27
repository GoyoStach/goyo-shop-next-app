'use client';
import { ProductDetails } from '@/types/Product.type';
import { InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Grid,
  Heading,
  Icon,
  Image,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, type FC } from 'react';
import { BiSolidCoffeeBean } from 'react-icons/bi';
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
  const [sliderValue, setSliderValue] = useState<number>(2);
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };
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
              {parseInt(data.price ?? '0') * sliderValue} {data.currency}
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
        <Box
          width={'full'}
          height={'full'}
          paddingX={[2, 4, 6, 8, 10]}
        >
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            justifyContent={'center'}
            display={'flex'}
            paddingY={[2, 4, 6, 8, 10]}
          >
            Quantity
          </Heading>
          <Slider
            aria-label="slider-ex-6"
            onChange={(val) => setSliderValue(val)}
            min={1}
            max={4}
            step={1}
            defaultValue={2}
          >
            <SliderMark
              value={1}
              {...labelStyles}
            >
              250g
            </SliderMark>
            <SliderMark
              value={2}
              {...labelStyles}
            >
              500g
            </SliderMark>
            <SliderMark
              value={3}
              {...labelStyles}
            >
              750g
            </SliderMark>
            <SliderMark
              value={4}
              {...labelStyles}
            >
              1Kg
            </SliderMark>
            <SliderTrack bg={'cappucino.100'}>
              <SliderFilledTrack bg={'cappucino.500'} />
            </SliderTrack>
            <SliderThumb
              boxSize={6}
              bg={'cappucino.100'}
            >
              <Box
                color="cappucino.500"
                as={BiSolidCoffeeBean}
              />
            </SliderThumb>
          </Slider>
        </Box>
      </Grid>
    </Center>
  );
};

export default ProductIndividual;
