'use client';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Link from 'next/link';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isConnected, setIsConnected] = useState(true);

  const handleSignIn = () => {
    setIsConnected(!isConnected);
  };

  return (
    <Container
      p={2}
      maxW={'6xl'}
      textAlign="center"
    >
      <Flex
        as={motion.div}
        variants={navVariants}
        initial="hidden"
        whileInView={'show'}
        h={'auto'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Link href={'/'}>
          <Heading hideBelow={'md'}>Height of Coffee</Heading>
          <Heading hideFrom={'md'}>H.O.G</Heading>
        </Link>

        <Flex alignItems={'center'}>
          <Stack
            direction={'row'}
            spacing={7}
          >
            <Button
              onClick={toggleColorMode}
              colorScheme="gray"
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isConnected ? (
              <Menu colorScheme="cappucino">
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    color={colorMode === 'light' ? 'black' : 'white'}
                    size={'sm'}
                    name={'Goyo'}
                    bg={useColorModeValue('cappucino.200', 'cappucino.300')}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <Center>
                    <p>Goyo</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>
                    <Link href={'/Shop'}>Shop</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/About'}>About</Link>
                  </MenuItem>
                  <MenuItem onClick={() => handleSignIn()}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                onClick={() => handleSignIn()}
                colorScheme="gray"
              >
                Sign In
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
