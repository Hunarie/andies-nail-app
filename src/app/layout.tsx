import type { Metadata } from "next";
import { Geist, Geist_Mono, Akaya_Kanadaka } from "next/font/google";
import { createTheme, MantineProvider, ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const akayaKanadaka = Akaya_Kanadaka({
  variable: "--font-akaya-kanadaka",
  subsets: ["latin"],
  weight: ["400"],
});

const theme = createTheme({
  primaryColor: 'pink',
  fontFamily: 'var(--font-geist-sans)',
  headings: {
    fontFamily: 'var(--font-akaya-kanadaka)',
  },
});

export const metadata: Metadata = {
  title: "Andie's Nail Bar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${akayaKanadaka.variable}`}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
