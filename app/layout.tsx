"use client";
import ChakraWrapper from "./components/Chakra";
import Navbar from "./components/Navbar";

// import "./globals.css";

import theme from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

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

          {/* <Main />*/}
          {/* <NextScript />  */}
        
        </ChakraWrapper>
      </body>
    </html>
  );
}
