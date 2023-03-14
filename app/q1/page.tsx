"use client";
import {
  Box,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import { Yantramanav, Roboto } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const Quarterone = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box> 
      {/* // Hero Section */}
      <Box
        height="86vh"
        backgroundColor="#192a56"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Heading
          fontSize={{ base: "40px", lg: "48px" }}
          className={yantramanav.className}
        >
          <Text>Quarter One</Text>
        </Heading>
        <Box px="9">
          <Text className={roboto.className} pt="5">
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
            <br /> <br />
          </Text>
          <Text fontStyle="italic">Duration: 13 Weeks</Text>
        </Box>
      </Box>

      {/* Detailed Program Structure */}
      <Heading as="h2">
        <Text
          fontSize={{ base: "36px", lg: "40px" }}
          mt="50px"
          className={yantramanav.className}
          textAlign="center"
        >
          Detailed Program Structure
        </Text>
      </Heading>

      {/* Details */}
      <Box
        maxW="1250px"
        mt="5"
        mb="10"
        mx={{ base: 5, lg: "auto" }}
        position="relative"
      >
        {/* One  */}
        <Box
          p="5"
          w={{ base: "100%", lg: "40vw" }}
          borderRadius="5px"
          backgroundColor={`${colorMode === "dark" ? "#1a202c" : "white"}`}
          style={{ boxShadow: "2px 2px 30px 0 rgb(0 0 0 / 26%)" }}
        >
          <Heading>
            <Text
              fontSize={{ base: "22px", lg: "26px" }}
              className={yantramanav.className}
            >
              Learn HTML and CSS
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link
                href="
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 
                "
              >
                Learn HTML by Hira Khan (Watch Recorded Videos on Youtube){" "}
                <br />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob 
                "
              >
                Learn CSS by Hira Khan (Watch Recorded Videos on Youtube) <br />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Two  */}
        <Box
          p="5"
          mt="5"
          ml="auto"
          w={{ base: "100%", lg: "40vw" }}
          borderRadius="5px"
          backgroundColor={`${colorMode === "dark" ? "#1a202c" : "white"}`}
          style={{ boxShadow: "2px 2px 30px 0 rgb(0 0 0 / 26%)" }}
        >
          <Heading>
            <Text
              fontSize={{ base: "22px", lg: "26px" }}
              className={yantramanav.className}
            >
              Web 3.0 and Metaverse Theory
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link
                href="
                https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing 
                "
              >
                Introduction to Panaverse DAO
                <br />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="
                https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing 
                "
              >
                Web 3.0 User Guide
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="
                https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
              >
                Virtual and Augmented Metaverse User Guide
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Three  */}
        <Box
          p="5"
          mt="5"
          w={{ base: "100%", lg: "40vw" }}
          borderRadius="5px"
          backgroundColor={`${colorMode === "dark" ? "#1a202c" : "white"}`}
          style={{ boxShadow: "2px 2px 30px 0 rgb(0 0 0 / 26%)" }}
        >
          <Heading>
            <Text
              fontSize={{ base: "22px", lg: "26px" }}
              className={yantramanav.className}
            >
              Fundamentals of Typescript
            </Text>
          </Heading>

          <UnorderedList mt="5" spacing="2" className={roboto.className}>
            <ListItem>
              <Link href="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing">
                TypeScript Presentation
                <br />
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                Getting Started Exercises with TypeScript and Node.js
              </Link>
            </ListItem>

            <ListItem>
              Topics Covered in Quiz:
              <UnorderedList spacing="2">
                <ListItem>
                  Background of JavaScript and How to use JavaScript in Browser
                </ListItem>
                <ListItem>
                  Variables, Primitive data types Analyzing and modifying data
                  types, and Operators (Chapter 2 of JavaScript from Beginner to
                  Professional)
                </ListItem>
                <ListItem>
                  Intro to Node.js, .mjs files, Modules, NPM, import, export,
                  and using external modules with npm
                </ListItem>
                <ListItem>
                  How to accept user input in your Node.js JavaScript programs,
                  this will allow us to create interactive Node.js console
                  programs using prompt-sync library. The last example in this
                  presentation shows you how to use prompt-sync library in your
                  Node.js programs:
                </ListItem>

                <ListItem>
                  Using Concurrency, Callbacks, Promises, async / await, and
                  Event loop (chapter 13 of JavaScript from Beginner to
                  Professional)
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Four  */}
        <Box
          ml="auto"
          p="5"
          mt="5"
          w={{ base: "100%", lg: "40vw" }}
          borderRadius="5px"
          backgroundColor={`${colorMode === "dark" ? "#1a202c" : "white"}`}
          style={{ boxShadow: "2px 2px 30px 0 rgb(0 0 0 / 26%)" }}
        >
          <Heading>
            <Text
              fontSize={{ base: "22px", lg: "26px" }}
              className={yantramanav.className}
            >
              Object-Oriented Programming with TypeScript
            </Text>
          </Heading>

          <UnorderedList mt="5" spacing="2" className={roboto.className}>
            <ListItem>
              <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1">
                Chapters 1-11 of Learning TypeScript: Enhance Your Web
                Development Skills Using Type-Safe JavaScript
                <br />
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/panaverse/learn-typescript">
                Learning Repository
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Five  */}
        <Box
          p="5"
          mt="5"
          w={{ base: "100%", lg: "40vw" }}
          borderRadius="5px"
          backgroundColor={`${colorMode === "dark" ? "#1a202c" : "white"}`}
          style={{ boxShadow: "2px 2px 30px 0 rgb(0 0 0 / 26%)" }}
        >
          <Heading>
            <Text
              fontSize={{ base: "22px", lg: "26px" }}
              className={yantramanav.className}
            >
              TypeScript for React
            </Text>
          </Heading>

          <UnorderedList mt="5" spacing="2" className={roboto.className}>
            <ListItem>
              <Link href="https://profy.dev/article/react-typescript ">
                Minimal TypeScript Crash Course For React With Interactive Code
                Exercises
                <br />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Quarterone;
