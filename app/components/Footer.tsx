"use client";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Roboto, Yantramanav } from "@next/font/google";
import Link from "next/link";
import React from "react";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <Box maxW="100%" bgColor="blackAlpha.200">
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 4 }}
        spacing={{ base: 3, md: 4, lg: 5 }}
        p="50px"
        mt={{ base: "4", lg: "0" }}
      >
        <Box>
          <Heading textTransform="uppercase" className={yantramanav.className}>
            <Text
              fontSize={{ base: "20px", lg: "26px" }}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "10%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              about us
            </Text>
          </Heading>
          <Text className={roboto.className} pt="4" fontSize="15px">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
        </Box>

        <Box>
          <Heading textTransform="uppercase" className={yantramanav.className}>
            <Text
              fontSize={{ base: "20px", lg: "26px" }}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "10%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              useful links
            </Text>
          </Heading>

          <UnorderedList listStyleType={"none"} fontSize="15px">
            {/* Items */}
            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="/">Home</Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="/">Web 3.0</Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="/">About Us</Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="/">Courses</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading textTransform="uppercase" className={yantramanav.className}>
            <Text
              fontSize={{ base: "20px", lg: "26px" }}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "10%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              follow us
            </Text>
          </Heading>

          <UnorderedList listStyleType={"none"} fontSize="15px">
            {/* Items */}
            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="https://www.panaverse.co/">Our Website</Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="https://www.facebook.com/panaverse.dao">
                Facebook
              </Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="https://twitter.com/Panaverse_edu">Twitter</Link>
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              <Link href="https://github.com/panaverse">Github</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading textTransform="uppercase" className={yantramanav.className}>
            <Text
              fontSize={{ base: "20px", lg: "26px" }}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "10%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              more available programs
            </Text>
          </Heading>

          <UnorderedList listStyleType={"none"} fontSize="15px">
            {/* Items */}
            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              Artificial Intelligence
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              Cloud Native and Mobile and Web Computing
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              Internet of things
            </ListItem>

            <ListItem
              cursor="pointer"
              py="3"
              textDecoration="underline"
              _hover={{ color: "#08d88d", transition: "0.2s ease" }}
            >
              Blockchain
            </ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
