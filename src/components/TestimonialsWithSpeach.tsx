'use client';

import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children = false } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue('cappucino.200', 'cappucino.900')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      opacity={'0.9'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('cappucino.200', 'cappucino.900'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading
      as={'h3'}
      fontSize={'xl'}
      color={'accent.400'}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={'center'}
      style={{ textWrap: 'balance' }}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex
      align={'center'}
      mt={8}
      direction={'column'}
    >
      <Avatar
        src={src}
        mb={2}
      />
      <Stack
        spacing={-1}
        align={'center'}
      >
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'}>{title}</Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container
        maxW={'7xl'}
        py={16}
        as={Stack}
        spacing={12}
      >
        <Stack
          spacing={0}
          align={'center'}
        >
          <Heading>Word from our partners </Heading>
          <Text>From all around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Delivery</TestimonialHeading>
              <TestimonialText>
                Received my items in less than a week ! In a domain such as
                coffee roasting where freshness is everything, I can only praise
                such efficiency !
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/avatar/vicky.jpg'}
              name={'Vicky Becqre'}
              title={'Head Barista in Melbourne'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Variety of Flavors !</TestimonialHeading>
              <TestimonialText>
                From bold blends to fruity notes and unique seasonal options,
                there&apos;s something for every taste. It&apos;s a coffee
                lover&apos;s dream, offering endless choices and high quality
                with every cup!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/avatar/bryan.jpg'}
              name={'Bryan Legrand'}
              title={'Customer & Coffee enthusiast'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
