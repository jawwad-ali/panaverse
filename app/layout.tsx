"use client";
import ChakraWrapper from "./components/Chakra";
import Navbar from "./components/Navbar";

import theme from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Footer from "./components/Footer"; 
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ChakraWrapper>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Navbar />
          {children}
          <Footer />
          {/* <Main />*/}
          {/* <NextScript />  */}
        </ChakraWrapper>
      </body>
    </html>
  );
}
