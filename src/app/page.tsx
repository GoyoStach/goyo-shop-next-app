'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Masthead from '@/components/Masthead';
import { Spacer } from '@chakra-ui/react';
import React from 'react';
export default function Home() {
  return (
    <main>
      <Header />
      <Spacer />
      <Masthead />
      <Spacer />
      <Footer />
    </main>
  );
}
