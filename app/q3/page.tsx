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

import { Yantramanav, Roboto } from "@next/font/google";

import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const Quarterthree = () => {
  const { colorMode } = useColorMode();

  const [isInView1, setIsInView1] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
  });


  useEffect(() => {
    if (inView1) {
      setIsInView1(true);
    }
  }, [inView1]);

  return (
    <Box>
      {/* // Hero Section */}
      <Box
        height="86vh"
        backgroundColor="#4E31AA"
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
          <Text>Quarter Three</Text>
        </Heading>
        <Box px="9">
          <Text className={roboto.className} pt="5">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
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

      {/* One */}
      <Box
        ref={ref1}
        opacity={isInView1 ? 1 : 0}
        transform={`translateX(${isInView1 ? "0" : "-50px"})`}
        transition="opacity 0.6s, transform 0.6s"
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
              Earn while you learn projects
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="ttps://github.com/panaverse/panaverse-template-standard">
                You will be assigned to build a template which we will sell on
                Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                will receive 25% share on the sale of the template which will be
                used to manage the platform. An additional 15% will be spent on
                marketing the template. 60% of the revenues will be distributed
                to the developer through the Panaverse DAO in the form of
                Panaverse tokens.
                <br />
              </Link>
            </ListItem>
            <ListItem>
              <strong>Build QraphQL APIs:</strong> You will be assigned to build
              APIs for which you will sell subscriptions on the Panaverse DAO
              Marketplace. The Panaverse DAO will receive 25% share on the sale
              of the template which will be used to manage the platform. An
              additional 15% will be spent on marketing the template. 60% of the
              revenues will be distributed to the developer through the
              Panaverse DAO in the form of Panaverse tokens.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Quarterthree;
