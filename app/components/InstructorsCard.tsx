"use client";

import { Box, Icon, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { Roboto } from "@next/font/google";
import { Link } from "@chakra-ui/react";

import { FaLinkedin } from "react-icons/fa";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

interface InstructorsProps {
  picture: string;
  name: string;
  text: string;
  linkedInPath: string;
}

const InstructorsCard = ({
  picture,
  name,
  text,
  linkedInPath,
}: InstructorsProps) => {
  return (
    <Box
      display="flex"
      px="1"
      mt="5"
      alignItems="center"
      flexDirection="column"
      w={{ base: "100%", lg: "20%" }}
    >
      <Image
        boxSize="100px"
        borderRadius="full"
        objectFit="cover"
        src={picture}
        alt="Instructor"
        width={{ base: "100", md: "150" }}
        height={{ base: "100", md: "150" }}
      />
      <Text
        className={roboto.className}
        fontSize="20px"
        fontWeight="bold"
        textAlign="center"
        pt="4"
      >
        {name}
      </Text>
      <Text
        noOfLines={1}
        pt="1"
        className={roboto.className}
        textAlign="center"
      >
        {text}
      </Text>

      <Link href={`${linkedInPath}`} isExternal>
        <Icon marginTop="5" as={FaLinkedin} w={8} h={8} color="blue.500" />
      </Link>
    </Box>
  );
};

export default InstructorsCard;
