import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import React from 'react';
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description: 'A digital portfolio :)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex flex-col min-h-fit'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className={'flex flex-row justify-center mb-5 h-content min-h-[48px]'}>
            <NavBar />
          </header>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
