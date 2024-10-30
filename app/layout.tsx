import type { Metadata } from 'next';
import './globals.css';

// Fonts
import { montserrat } from '@/fonts';
import { MoreInfoWord } from '@/components/feature';
import { Providers } from '@/lib/providers';

// Metadata
export const metadata: Metadata = {
  title: 'Soner - A simple way to build question papers',
  description: 'A creative way to pitch Soner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          <MoreInfoWord />
          {children}
        </Providers>
      </body>
    </html>
  );
}
