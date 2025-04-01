// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GnomoAwards - Premios de Bushcraft y Autosuficiencia',
  description: 'Celebrando lo mejor del bushcraft, la autosuficiencia y la comunidad de Wild Gnomos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}