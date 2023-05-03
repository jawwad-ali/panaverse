"use client";
import React from "react";
import { Roboto, Yantramanav } from "@next/font/google";

import { Heading, Box, Text, Flex } from "@chakra-ui/react";

import CardSection from "./CardSection";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const Offer = () => {
  return (
    <Box
      id="courses"
      as="div"
      mb="50px"
      marginTop={{ base: "58px" }}
      maxW="100%"
    >
      <Heading
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={4}
      >
        <Text
          fontWeight="bold"
          className={yantramanav.className}
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
          What we Offer
        </Text>
      </Heading>

      {/* Common courses */}
      <Heading
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        mb={2}
        px={4}
      >
        <Text
          fontWeight="bold"
          className={yantramanav.className}
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
            marginLeft: { base: "20px", md: 0, lg: 0 },
          }}
        >
          Core Courses (Common in All Specializations):
        </Text>
      </Heading>
      <Text
        fontSize={{ base: "15px", md: "16px" }}
        textAlign={"center"}
        px={{ base: "6", lg: "0" }}
        pt={4}
        className={roboto.className}
      >
        Every participant of the program will start by completing the following
        three core courses:
      </Text>

      {/* Card Section */}
      <Flex
        justifyContent="space-around"
        direction={{ base: "column", lg: "row" }}
        mt={4}
        w="100%"
        px={{ base: "6", lg: "4" }}
      >
        <CardSection
          quarter="Quarter I (Core)"
          oneLiner="CS-101: Object-Oriented Programming using TypeScript"
          link="q1"
        />
        <CardSection
          quarter="Quarter II (Core)"
          oneLiner="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
          link="q2"
        />
        <CardSection
          quarter="Quarter III (Core)"
          oneLiner="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
          link="q3"
        />
      </Flex>

      {/* Specialized Tracks */}
      <Heading
        className={yantramanav.className}
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={4}
        mt={10}
      >
        <Text
          fontWeight="bold"
          className={yantramanav.className}
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
          Specialized Tracks
        </Text>
      </Heading>

      <Text
        mt={4}
        px={{ base: "4", md: "16" }}
        fontSize={{ base: "15px", md: "16px" }}
        textAlign={"center"}
        className={roboto.className}
      >
        After completing the first three quarters the participants will select
        one or more specializations consisting of two courses each:
      </Text>

      {/* Specialized Tracks Cards */}
      <Box
        display="flex"
        flexWrap="wrap"
        mx={{ base: "6", lg: "4" }}
        mt={4}
        maxW="100%"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Web 3.0 (Blockchain) and Metaverse Specialization"
            oneLiner="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
            link="#"
          />
        </Box>

        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Cloud-Native Computing Specialization"
            oneLiner="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. "
            link="#"
          />
        </Box>

        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Ambient Computing and IoT Specialization"
            oneLiner="The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. "
            link="#"
          />
        </Box>

        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Genomics and Bioinformatics Specialization"
            oneLiner="Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. "
            link="#"
          />
        </Box>

        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Network Programmability and Automation Specialization"
            oneLiner="More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git. "
            link="#"
          />
        </Box>

        <Box
          display="flex"
          width={{ base: "100%", lg: "33%" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CardSection
            quarter="Artificial Intelligence (AI) and Deep Learning Specialization"
            oneLiner="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
            link="#"
          />
        </Box>
      </Box>
    </Box>
    // </div>
  );
};

export default Offer;
