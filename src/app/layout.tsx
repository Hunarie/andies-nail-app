import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700"],
});

const theme = createTheme({
  primaryColor: 'pink',
  fontFamily: 'var(--font-geist-sans)',
  headings: {
    fontFamily: 'var(--font-playfair-display)',
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable}`}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
