"use client";
import {
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Box,
  IconButton, 
  // Link,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

import Image from "next/image";
import Link from "next/link"

import { usePathname } from "next/navigation";

import Logo from "../../assets/panaverse-logo.webp";
import LogoForDark from "../../assets/dark_theme_logo.jpg";

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useState } from "react";

import { Manrope } from "@next/font/google";

const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin"],
});

// Scroll to the courses component
export function scrollToCoursesComponent() {
  const secondComponent = document.getElementById("courses");
  secondComponent?.scrollIntoView({ behavior: "smooth" });
}

const Navbar = () => {
  const pathname = usePathname();

  const [display, setDisplay] = useState("none");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex maxW={"100%"} justifyContent={"space-between"} alignItems={"center"}>
      {/* Logo */}
      <Flex px={{ base: "2", md: "6", lg: "8" }} py={"4"} flex="0.6">
        {colorMode === "light" ? (
          <Link href="/">
            <Image src={Logo} alt="logo" height={"100"} width={"100"} />
          </Link>
        ) : (
          <Link href="/">
            <Image
              style={{ mixBlendMode: "color" }}
              src={LogoForDark}
              alt="logo"
              height={"60"}
              width={"60"}
            />
          </Link>
        )}
      </Flex>

      {/* Right Side */}
      <Box flex={"0.4"} display={{ base: "none", md: "none", lg: "flex" }}>
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          w="100%"
          justifyContent={"space-around"}
          alignItems={"center"}
          className={manrope.className}
          fontSize="17px"
        >
          {/* Items */}
          <Link href="/">
              Home
            </Link>
          {/* <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            
          </ListItem> */}

          {/* <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}> */}
            {/* <Link href="/about">About Us</Link> */}
            <Link href="/about">
              About 
            </Link>
          {/* </ListItem> */}

          <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            <Link href="/">Web 3.0</Link>
          </ListItem>

          {pathname === "/" && (
            <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
              <Button
                background="none"
                type="button"
                backgroundColor="transparent"
                color={colorMode === "light" ? "#1a202c" : "FFFF"}
                fontWeight="normal"
                fontSize="17px"
                className={manrope.className}
                onClick={scrollToCoursesComponent}
                _hover={{
                  background: "none",
                }}
              >
                Courses
              </Button>
            </ListItem>
          )}

          <ListItem>
            <Link href="https://www.piaic.org/">
              <Button
                style={{
                  backgroundImage: "linear-gradient(270deg,#08d88d,#0eb5a3)",
                }}
                color="white"
              >
                Apply Now
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </ListItem>
        </UnorderedList>
      </Box>

      {/* Hamburger Icon */}
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={{ base: "4", md: "7", lg: "10" }}
        icon={<HamburgerIcon />}
        onClick={() => setDisplay("flex")}
        display={{ base: "flex", md: "flex", lg: "none" }}
      />

      {/* Mobile Menu */}
      <Flex
        w="100vw"
        bgColor={colorMode === "dark" ? "#393838" : "white"}
        zIndex={50}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir={"column"}
        display={display}
        right="1"
      >
        <Flex justify="flex-end">
          <IconButton
            mt="2"
            mr="2"
            aria-label="Close menu"
            size="lg"
            onClick={() => setDisplay("none")}
            icon={<CloseIcon />}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            flexDir={"column"}
            w="100%"
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <ListItem py="5">
              <Link href="/">Home</Link>
            </ListItem>

            <ListItem py="5">
              <Link href="/about">About Us</Link>
            </ListItem>

            <ListItem py="5">
              <Link href="/">Web 3.0</Link>
            </ListItem>

            {pathname === "/" && (
              <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
                <Button
                  type="button"
                  backgroundColor="transparent"
                  color={colorMode === "light" ? "#1a202c" : "FFFF"}
                  fontWeight="normal"
                  fontSize="17px"
                  className={manrope.className}
                  onClick={scrollToCoursesComponent}
                  _hover={{
                    background: "none",
                  }}
                >
                  Courses
                </Button>
              </ListItem>
            )}

            <ListItem py="5">
              <Link href="https://www.piaic.org/">
                <Button
                  style={{
                    backgroundImage: "linear-gradient(270deg,#08d88d,#0eb5a3)",
                  }}
                  color="white"
                >
                  Apply Now
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
