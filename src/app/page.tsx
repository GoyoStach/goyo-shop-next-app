'use client';

import Masthead from '@/components/Masthead';
import SplitWithImage from '@/components/SplitWithImage';
import WithSpeechBubbles from '@/components/TestimonialsWithSpeach';
import { Spacer } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Masthead />
      <Spacer />
      <SplitWithImage />
      <Spacer />
      <WithSpeechBubbles />
    </main>
  );
}
