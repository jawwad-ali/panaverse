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

const About = () => {
  return (
    <div>
      <h3>This is About Page </h3>
    </div>
    // <SimpleGrid
    //   maxWidth="1300px"
    //   mx="auto"
    //   mr={{ base: 0, lg: "7" }}
    //   mt={{ base: "4", lg: "10" }}
    //   position="relative"
    //   mb="10"
    // >
    //   <Box maxWidth="1000px" mx="auto">
    //     <Heading
    //       fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
    //       textAlign={"center"}
    //       pb={4}
    //     >
    //       <Text
    //         fontWeight="bold"
    //         className={yantramanav.className}
    //         as={"span"}
    //         position={"relative"}
    //         _after={{
    //           content: "''",
    //           width: "full",
    //           height: "10%",
    //           position: "absolute",
    //           bottom: 1,
    //           left: 0,
    //           bg: "green.400",
    //           zIndex: -1,
    //         }}
    //       >
    //         About Us
    //       </Text>
    //     </Heading>

    //     <Box px={{ base: "6", lg: "5" }} className={roboto.className} mt="2">
    //       <Text fontSize={{ base: "15px", md: "16px" }}>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, Lorem Ipsum is simply dummy text of the
    //         printing and typesetting industry. Lorem Ipsum has been the
    //         industry's standard dummy text ever since the 1500s, when an unknown
    //         printer took a galley of type and scrambled it to make a type
    //         specimen book.
    //       </Text>
    //       <Text pt="7" fontSize={{ base: "15px", md: "16px" }}>
    //         It is a long established fact that a reader will be distracted by
    //         the readable content of a page when looking at its layout. The point
    //         of using Lorem Ipsum is that it has a more-or-less normal
    //         distribution of letters, as opposed to using 'Content here, content
    //         here', making it look like readable English. Many desktop publishing
    //         packages and web page editors now use Lorem Ipsum as their default
    //         model text, and a search for 'lorem ipsum' will uncover many web
    //         sites still in their infancy.
    //       </Text>
    //     </Box>
    //   </Box>

    //   {/* Counts */}
    //   <SimpleGrid
    //     mx="auto"
    //     mt="50px"
    //     mb="15px"
    //     px="25px"
    //     w={{ base: "100%", lg: "75%" }}
    //     columns={{ base: 1, md: 1, lg: 2 }}
    //     spacing={{ base: 3, md: 4, lg: 5 }}
    //   >
    //     <Flex
    //       border="1px"
    //       borderColor="silver"
    //       alignItems="center"
    //       py="10px"
    //       px="15px"
    //     >
    //       <Flex flex="0.2" color="red.400">
    //         <BsFillPeopleFill fontSize="50px" />
    //       </Flex>

    //       <Flex ml="30px" flex="0.6" flexDir="column">
    //         <Heading
    //           fontSize={{ base: "14px", md: "16px", lg: "20px" }}
    //           fontWeight="normal"
    //           color="silver"
    //           className={roboto.className}
    //         >
    //           Total Students
    //         </Heading>
    //         <Text
    //           fontSize={{ base: "18px", md: "22px", lg: "30px" }}
    //           fontWeight="bold"
    //           color="#252525"
    //           className={yantramanav.className}
    //         >
    //           <CountUp start={0} end={5000} duration={2} />+ Students
    //         </Text>
    //       </Flex>
    //     </Flex>

    //     <Flex
    //       border="1px"
    //       borderColor="silver"
    //       alignItems="center"
    //       py="10px"
    //       px="15px"
    //     >
    //       <Flex flex="0.2" color="red.400">
    //         <BsBuildings fontSize="50px" />
    //       </Flex>

    //       <Flex ml="30px" flex="0.6" flexDir="column">
    //         <Heading
    //           fontSize={{ base: "14px", md: "16px", lg: "20px" }}
    //           fontWeight="normal"
    //           color="silver"
    //           className={roboto.className}
    //         >
    //           Cities
    //         </Heading>
    //         <Text
    //           fontSize={{ base: "20px", md: "25px", lg: "35px" }}
    //           fontWeight="bold"
    //           color="#252525"
    //           className={yantramanav.className}
    //         >
    //           <CountUp start={0} end={25} duration={2} />+ Cities
    //         </Text>
    //       </Flex>
    //     </Flex>
    //   </SimpleGrid>
    // </SimpleGrid>

    // <SimpleGrid
    //   maxWidth="1300px"
    //   mx="auto"
    //   columns={{ base: 1, md: 1, lg: 2 }}
    //   spacing={{ base: 3, md: 4, lg: 5 }}
    //   mr={{ base: 0, lg: "7" }}
    //   mt={{ base: "4", lg: "10" }}
    //   position="relative"
    //   mb="10"
    // >
    //   <Box>
    //     <Box>
    //       <Image
    //         src={PresidentImg}
    //         alt="President Arif Alvi"
    //         style={{ maxWidth: "400px", maxHeight: "700px", margin: "0 auto" }}
    //       />
    //     </Box>
    //   </Box>

    //   <Box
    //     className={roboto.className}
    //     textAlign="center"
    //     mx={{ base: 7, lg: 0 }}
    //     mt={{ base: 6, lg: 0 }}
    //     fontSize={{ base: "14px", lg: "16px" }}
    //   >
    //     <Box marginTop='4%'>
    //       <Text>
    //         Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
    //         of Pakistan on 9th September 2018.
    //       </Text>
    //       <br />
    //       <Text>
    //         Dr. Arif Alvi was born in 1949 and completed his early education in
    //         Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
    //         Montmorency College of Dentistry, Lahore where he was declared the
    //         “Best Graduate”. He completed his Masters of Science in the field of
    //         Prosthodontics from University of Michigan (1975) and in
    //         Orthodontics from University of Pacific, San Francisco (1982). He
    //         was awarded fellowship ‘Diplomatic American Board of Orthodontists
    //         (1995)’.
    //       </Text>

    //       <br />

    //       <Text>
    //         Dr. Arif Alvi’s political career commenced with his pro-democracy
    //         struggle against the dictatorship of General Ayub Khan. He is a
    //         founding member of Pakistan Tehreek-e-Insaf (PTI) that came into
    //         being in 1996. He remained a member of the PTI’s Central Executive
    //         Committee since its inception and has held the offices of PTI
    //         President of Sindh (1997-2001), Central Vice President (2001-2006)
    //         and Secretary General (2006-2013). In line with Constitution of
    //         Pakistan, he resigned from all the positions of PTI before assuming
    //         the prestigious office of the President.
    //       </Text>
    //     </Box>
    //   </Box>
    // </SimpleGrid>
  );
};

export default About;
