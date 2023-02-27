"use client";
import { useEffect } from "react";
import { Yantramanav, Roboto } from "@next/font/google";

import { Heading, Box, Text, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

import HeroSectionImg from "../../public/herosection.webp";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const yantramanav = Yantramanav({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const HeroSection = () => {
  useEffect(() => {
    return () => {
      AOS.init();
      AOS.refresh();
    };
  }, []);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      spacing={{ base: 3, md: 4, lg: 5 }}
      mx="7"
      height={{ base: "120vh", md: "120vh", lg: "90vh" }}
      mt={{ base: "4", lg: "0" }}
    >
      <Flex flexDirection="column" justifyContent="center">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          className={yantramanav.className}
          fontWeight={"bold"}
        >
          Certified Web 3.0 and Metaverse Developer
        </Heading>
        <Text 
          pt="5"
          className={roboto.className}
          fontWeight={"normal"}
          lineHeight={"28px"}
          fontSize={{ base: "15px", lg: "16px" }}
          color={"slategray.100"}
        >
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects.
        </Text>

        <Box mt="5">
          <Link href="https://www.piaic.org/">
            <Button
              style={{
                backgroundImage: "linear-gradient(270deg,#08d88d,#0eb5a3)",
              }}
              position={"relative"}
              color="white"
              className={roboto.className}
              fontSize={{ base: "15px", lg: "16px" }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Flex>

      {/* Right Side */}
      <Box
        as="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Image
          data-aos="fade-left"
          src={HeroSectionImg}
          alt="Hero Section Image"
          layout="responsive"
        />
      </Box>
    </SimpleGrid>
  );
};

export default HeroSection;
