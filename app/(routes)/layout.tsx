import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import '../globals.css';
import classNames from 'classnames';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const revalidate = 60 * 60 * 3;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.variable, firaCode.variable)}>
        {children}
      </body>
    </html>
  );
}
