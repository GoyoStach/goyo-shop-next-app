import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
  Heading,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

import Link from 'next/link';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isConnected, setIsConnected] = useState(false);

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
          <Heading>Goyo-Demo-Shop</Heading>
        </Link>

        <Flex alignItems={'center'}>
          <Stack
            direction={'row'}
            spacing={7}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isConnected ? (
              <Menu>
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
              <Button onClick={() => handleSignIn()}>Sign In</Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;