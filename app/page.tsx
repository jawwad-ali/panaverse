// 'use client'
import { Box } from "@chakra-ui/react";

import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import Offer from "./components/Offer";

export default function Home() {
  return (
    // <Box maxWidth="1300px" mx="auto">
    <div
      style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}
    >
      Hello Home Page.
      {/* <HeroSection /> */}
      {/* <Offer /> */}
      {/* <Instructors /> */}
    </div>
    // </Box>
  );
}
