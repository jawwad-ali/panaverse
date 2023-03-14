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

const Quartertwo = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      {/* // Hero Section */}
      <Box
        height="86vh"
        backgroundColor="#2D2727"
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
          <Text>Quarter Two</Text>
        </Heading>
        <Box px="9">
          <Text className={roboto.className} pt="5">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
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
              Next.js 13 Web Development
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://beta.nextjs.org/docs">
                Next 13 Official Documentation
                <br />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://beta.reactjs.org/learn">
                Latest Learn React Official Website
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/panaverse/learn-nextjs">
                Learn Next.js 13 Learning Repo
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
              Next.js 13 using Chakra UI (Remote Zoom Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">
                CSS Flexbox Explained – Complete Guide to Flexible Containers
                and Flex Items
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://chakra-ui.com/getting-started">
                Chakra UI Docs
                <br />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Three */}
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
              UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
              Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                Designing and Prototyping Interfaces with Figma: Learn essential
                UX/UI design principles by creating interactive prototypes for
                mobile, tablet, and desktop by Fabio Staiano
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.figma.com/community/file/768809027799962739">
                Figma Design Kit for TailwindCSS
                <br />
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.figma.com/community/file/971408767069651759">
                Chakra UI Figma Kit
                <br />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Four */}
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
              API Routes with Next.js (Remote Zoom Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://nextjs.org/docs/api-routes/introduction">
                API Routes
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* FIve */}
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
              APIs with Next.js and tRPC (Remote Zoom Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                Build a tRPC CRUD API Example with Next.js
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                Stop building REST APIs for your Next.js apps, use tRPC instead
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Six */}
        <Box
          p="5"
          ml="auto"
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
              SQL and Prisma
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                Start from scratch with relational databases
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                SQL For Beginners Video Tutorial
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
                Database Management Systems and SQL – Tutorial for Beginners
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Seven */}
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
              Next.js 13 using TailwindCSS (Remote Zoom Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/ ">
                Modern CSS with Tailwind, Second Edition by Noel Rappin
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Eight */}
        <Box
          p="5"
          mt="5"
          ml='auto'
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
              AWS Application Composer (Remote Zoom Class)
            </Text>
          </Heading>

          <UnorderedList mt="5" className={roboto.className} spacing="2">
            <ListItem>
              <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
                What is AWS Application Composer?
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.youtube.com/watch?v=p411uh363jQ ">
                Event-driven apps with AWS Application Composer
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://aws.amazon.com/application-composer/">
                Visually design and build serverless applications quickly
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Quartertwo;
