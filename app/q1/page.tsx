"use client";
import {
  Box,
  Heading, 
  Text,
  ListItem,
  UnorderedList,
  HStack,
  Icon,
  Link,
  useColorMode,
} from "@chakra-ui/react";

import { FaArrowRight } from "react-icons/fa";

import { Yantramanav, Roboto } from "@next/font/google";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  const name: string[] = ["q1"];
  return name;
}

const Quarterone = () => {
  const { colorMode } = useColorMode();

  // Open the page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);
  const [isInView4, setIsInView4] = useState(false);
  const [isInView5, setIsInView5] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView1) {
      setIsInView1(true);
    }
    if (inView2) {
      setIsInView2(true);
    }
    if (inView3) {
      setIsInView3(true);
    }
    if (inView4) {
      setIsInView4(true);
    }
    if (inView5) {
      setIsInView5(true);
    }
  }, [inView1, inView2, inView3, inView4, inView5]);

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
          ref={ref1}
          opacity={isInView1 ? 1 : 0}
          transform={`translateX(${isInView1 ? "0" : "-50px"})`}
          transition="opacity 0.6s, transform 0.6s"
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

          <HStack>
            <UnorderedList mt="5" className={roboto.className} spacing="2">
              <ListItem listStyleType="none" ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                  target="_blank"
                >
                  Learn HTML by Hira Khan (Watch Recorded Videos on Youtube){" "}
                  <br />
                </Link>
              </ListItem>

              <ListItem listStyleType="none" ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  href="
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob 
                "
                  target="_blank"
                >
                  Learn CSS by Hira Khan (Watch Recorded Videos on Youtube){" "}
                  <br />
                </Link>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Box>

        {/* Two  */}
        <Box
          ref={ref2}
          opacity={isInView2 ? 1 : 0}
          transform={`translateX(${isInView2 ? "0" : "50px"})`}
          transition="opacity 0.6s, transform 0.6s"
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

          <HStack>
            <UnorderedList
              mt="5"
              className={roboto.className}
              spacing="2"
              listStyleType="none"
            >
              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  href="
                https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing 
                "
                  target="_blank"
                >
                  Introduction to Panaverse DAO
                  <br />
                </Link>
              </ListItem>
              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="
                https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing 
                "
                >
                  Web 3.0 User Guide
                </Link>
              </ListItem>

              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="
                https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                >
                  Virtual and Augmented Metaverse User Guide
                </Link>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Box>

        {/* Three  */}
        <Box
          ref={ref3}
          opacity={isInView3 ? 1 : 0}
          transform={`translateX(${isInView3 ? "0" : "-50px"})`}
          transition="opacity 0.6s, transform 0.6s"
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

          <HStack>
            <UnorderedList
              mt="5"
              spacing="2"
              className={roboto.className}
              listStyleType="none"
            >
              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
                >
                  TypeScript Presentation
                  <br />
                </Link>
              </ListItem>

              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                >
                  Getting Started Exercises with TypeScript and Node.js
                </Link>
              </ListItem>

              <ListItem>
                Topics Covered in Quiz:
                <UnorderedList spacing="2">
                  <ListItem>
                    Background of JavaScript and How to use JavaScript in
                    Browser
                  </ListItem>
                  <ListItem>
                    Variables, Primitive data types Analyzing and modifying data
                    types, and Operators (Chapter 2 of JavaScript from Beginner
                    to Professional)
                  </ListItem>
                  <ListItem>
                    Intro to Node.js, .mjs files, Modules, NPM, import, export,
                    and using external modules with npm
                  </ListItem>
                  <ListItem>
                    How to accept user input in your Node.js JavaScript
                    programs, this will allow us to create interactive Node.js
                    console programs using prompt-sync library. The last example
                    in this presentation shows you how to use prompt-sync
                    library in your Node.js programs:
                  </ListItem>

                  <ListItem>
                    Using Concurrency, Callbacks, Promises, async / await, and
                    Event loop (chapter 13 of JavaScript from Beginner to
                    Professional)
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Box>

        {/* Four  */}
        <Box
          ref={ref4}
          opacity={isInView4 ? 1 : 0}
          transform={`translateX(${isInView4 ? "0" : "50px"})`}
          transition="opacity 0.6s, transform 0.6s"
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

          <HStack>
            <UnorderedList
              mt="5"
              spacing="2"
              className={roboto.className}
              listStyleType="none"
            >
              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1"
                >
                  Chapters 1-11 of Learning TypeScript: Enhance Your Web
                  Development Skills Using Type-Safe JavaScript
                  <br />
                </Link>
              </ListItem>

              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="https://github.com/panaverse/learn-typescript"
                >
                  Learning Repository
                </Link>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Box>

        {/* Five  */}
        <Box
          ref={ref5}
          opacity={isInView5 ? 1 : 0}
          transform={`translateX(${isInView5 ? "0" : "-50px"})`}
          transition="opacity 0.6s, transform 0.6s"
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

          <HStack>
            <UnorderedList
              mt="5"
              spacing="2"
              className={roboto.className}
              listStyleType="none"
            >
              <ListItem ml="-4">
                <Icon
                  as={FaArrowRight}
                  transform="rotate(-45deg)"
                  mr="2"
                  fontSize="14px"
                />
                <Link
                  target="_blank"
                  href="https://profy.dev/article/react-typescript "
                >
                  Minimal TypeScript Crash Course For React With Interactive
                  Code Exercises
                  <br />
                </Link>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Quarterone;
