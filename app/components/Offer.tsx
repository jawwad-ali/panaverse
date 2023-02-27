"use client";
import React from "react"; 
import { Yantramanav, Roboto } from "@next/font/google";

import { Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const yantramanav = Yantramanav({
  weight: ["400", "700"],
  subsets: ["latin"], 
});

const Offer = () => {
  return (
    <Box mt="400px" mb="50px" mx={"7"} position='relative'>
      <Heading 
        className={yantramanav.className}
        fontSize="36px"
        textAlign={"center"}
      >
        What we Offer 
      </Heading>
    </Box>
  );
};

export default Offer;
