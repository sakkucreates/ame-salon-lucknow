import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '@/data/salonData';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.shortName} | Bridal Makeup Artist in Lucknow`,
  description: `${BUSINESS_INFO.heroSub} Founded by Ms. Ananya Mishra. Rated 4.9 ★ with 114 Google Reviews.`,
  keywords: [
    'AME Unisex Salon',
    'Bridal Makeup Lucknow',
    'Makeup Artist Aliganj',
    'Ananya Mishra Makeup',
    'HD Airbrush Bridal Makeup',
    'Hair Salon Aliganj Lucknow',
    'Nail Extensions Lucknow',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#FAF8F5] text-[#292525] antialiased selection:bg-[#E8C7C7] selection:text-[#292525]">
        {children}
      </body>
    </html>
  );
}
