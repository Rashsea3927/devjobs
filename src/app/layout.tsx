import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kumbh-sans',
});

export const metadata: Metadata = {
  title: 'DevJobs - Find your next job in tech!',
  description: 'Find your next job in tech!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className={`${kumbh_sans.variable} bg-background min-h-[100dvh]`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
