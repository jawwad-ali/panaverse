"use client";
import React from "react";
import { Yantramanav, Roboto } from "@next/font/google";

import { Heading, Box, Text } from "@chakra-ui/react"; 
import CardSection from "./CardSection";

const yantramanav = Yantramanav({
  weight: ["400", "700"],
  subsets: ["latin"],
}); 

const Offer = () => {
  return (
    <Box mt="100px" mb="50px" position="relative" maxW={'100%'}>
      <Heading
        className={yantramanav.className}
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={4}
      >
        What we Offer
      </Heading>
      <Heading 
        className={yantramanav.className}
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        mb={2} 
      >
        Core Courses (Common in All Specializations):
      </Heading>
      <Text fontSize={{ base: "15px", lg: "16px" }} textAlign={"center"}>
        Every participant of the program will start by completing the following
        three core courses: 
      </Text>  

      {/* Card Section */}
      <CardSection />  

    </Box>
  );
};

export default Offer;
