import ChakraWrapper from "./components/Chakra";
import Navbar from "./components/Navbar";
 
// import "./globals.css"; 

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
          <Navbar />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}
