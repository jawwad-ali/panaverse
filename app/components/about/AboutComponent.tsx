"use client";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import CountUp from "react-countup";

import PresidentImg from "../../assets/president.jpg";
import { Roboto, Yantramanav } from "@next/font/google";

import { BsFillPeopleFill, BsBuildings } from "react-icons/bs";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const AboutComponent = () => {
  return (
    <SimpleGrid
      maxWidth="1300px"
      mx="auto"
      mr={{ base: 0, lg: "7" }}
      mt={{ base: "4", lg: "10" }}
      position="relative"
      mb="10"
    >
      <Box maxWidth="1000px" mx="auto">
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
            About Us
          </Text>
        </Heading>

        <Box px={{ base: "6", lg: "5" }} className={roboto.className} mt="2">
          <Text fontSize={{ base: "15px", md: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>
          <Text pt="7" fontSize={{ base: "15px", md: "16px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </Text>
        </Box>
      </Box>

      {/* Counts */}
      <SimpleGrid
        mx="auto"
        mt="50px"
        mb="15px"
        px="25px"
        w={{ base: "100%", lg: "75%" }}
        columns={{ base: 1, md: 1, lg: 2 }}
        spacing={{ base: 3, md: 4, lg: 5 }}
      >
        <Flex
          border="1px"
          borderColor="silver"
          alignItems="center"
          py="10px"
          px="15px"
        >
          <Flex flex="0.2" color="red.400">
            <BsFillPeopleFill fontSize="50px" />
          </Flex>

          <Flex ml="30px" flex="0.6" flexDir="column">
            <Heading
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="normal"
              color="silver"
              className={roboto.className}
            >
              Total Students
            </Heading>
            <Text
              fontSize={{ base: "18px", md: "22px", lg: "30px" }}
              fontWeight="bold"
              color="#252525"
              className={yantramanav.className}
            >
              <CountUp start={0} end={5000} duration={2} />+ Students
            </Text>
          </Flex>
        </Flex>

        <Flex
          border="1px"
          borderColor="silver"
          alignItems="center"
          py="10px"
          px="15px"
        >
          <Flex flex="0.2" color="red.400">
            <BsBuildings fontSize="50px" />
          </Flex>

          <Flex ml="30px" flex="0.6" flexDir="column">
            <Heading
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="normal"
              color="silver"
              className={roboto.className}
            >
              Cities
            </Heading>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "35px" }}
              fontWeight="bold"
              color="#252525"
              className={yantramanav.className}
            >
              <CountUp start={0} end={25} duration={2} />+ Cities
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default AboutComponent;
