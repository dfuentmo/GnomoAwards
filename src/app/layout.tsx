// app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GnomoAwards - Premios de Bushcraft y Autosuficiencia',
  description: 'Celebrando lo mejor del bushcraft, la autosuficiencia y la comunidad de Wild Gnomos',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}