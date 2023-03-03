"use client";
import {
  Flex,
  ListItem, 
  UnorderedList,
  Button,
  Box,
  IconButton, 
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/panaverse-logo.webp";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useState } from "react";

import { Manrope } from "@next/font/google";

const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [display, setDisplay] = useState("none"); 
  return (
    <Flex maxW={"100%"} justifyContent={"space-between"} alignItems={"center"}>
      {/* Logo */}
      <Flex px={{ base: "2", md: "6", lg: "8" }} py={"4"} flex="0.6">
        <Image src={Logo} alt="logo" height={"100"} width={"100"} />
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
          <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            <Link href="/">Home</Link>
          </ListItem>

          <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            <Link href="/">Web 3.0</Link>
          </ListItem>

          <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            <Link href="/">About Us</Link>
          </ListItem>

          <ListItem _hover={{ color: "#08d88d", transition: "0.2s ease" }}>
            <Link href="/">Courses</Link>
          </ListItem>

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
        bgColor={"gray.50"}
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
              <Link href="/">Web 3.0</Link>
            </ListItem>

            <ListItem py="5">
              <Link href="/">About Us</Link>
            </ListItem>

            <ListItem py="5">
              <Link href="/">Courses</Link>
            </ListItem>

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
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
