import type { Metadata } from "next";
import {
  createTheme,
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { geistSans } from "./fonts";

const theme = createTheme({});

export const metadata: Metadata = {
  title: "Andie Orozco's Nails",
  description: "Andie Orozco's Nails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={geistSans.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
