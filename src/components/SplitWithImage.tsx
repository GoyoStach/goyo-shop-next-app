'use client';

import {
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { BiHeart, BiLeaf } from 'react-icons/bi';
import { GiFrance } from 'react-icons/gi';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack
      direction={'row'}
      align={'center'}
    >
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container
      maxW={'5xl'}
      py={12}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Stack spacing={4}>
          <Heading>About our vision</Heading>
          <Text fontSize={'lg'}>
            Height of Coffee invites customers to savor a thoughtfully made
            beverage that celebrates both tradition and innovation!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue(
                  'cappucino.900',
                  'cappucino.100',
                )}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={BiLeaf}
                  color={'yellow.500'}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Eco Friendly'}
            />
            <Feature
              icon={
                <Icon
                  as={GiFrance}
                  color={'green.500'}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Torrefied in France'}
            />
            <Feature
              icon={
                <Icon
                  as={BiHeart}
                  color={'purple.500'}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Artisanal practices'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/mastheadimg1.jpg'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
