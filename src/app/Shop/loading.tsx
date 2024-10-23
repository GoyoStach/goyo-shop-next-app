import { Center, Heading, Spinner, Stack, Text } from '@chakra-ui/react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center minH={'100vh'}>
      <Stack
        direction={'column'}
        h={'full'}
        w={'full'}
        alignItems={'center'}
      >
        <Spinner
          speed="2.5s"
          size={'xl'}
        />
        <Text
          color={'accent.400'}
          fontSize={'sm'}
        >
          Loading in progress
        </Text>
        <Heading
          fontSize={'2xl'}
          fontFamily={'body'}
          fontWeight={500}
        >
          Please wait
        </Heading>
        <Text
          color={'accent.400'}
          fontSize={'sm'}
          as={'em'}
        >
          Artificial loading time 5s
        </Text>
      </Stack>
    </Center>
  );
}
