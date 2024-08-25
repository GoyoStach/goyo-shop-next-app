import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import React from 'react';
import { Providers } from '@/app/providers';
import { fonts } from '@/app/styles/font';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.mplus.variable} ${fonts.silkscreen.variable}`}
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
