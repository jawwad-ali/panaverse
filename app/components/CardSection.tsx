import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  // Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Link from "next/link"

interface CardProps {
  quarter: string;
  oneLiner: string;
  link: string;
}
import { Yantramanav, Roboto } from "@next/font/google";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const CardSection = ({ quarter, oneLiner, link }: CardProps) => {
  return (
    <>
      <Card
        margin={1}
        flex="1"
        boxShadow="base"
        align="center"
        w={{ base: "100%", lg: "33%" }}
        mt={4}
      >
        <CardHeader>
          <Heading
            size="md"
            textAlign="center"
            className={yantramanav.className}
          >
            <Text fontWeight="bold" className={yantramanav.className}>
              {quarter}
            </Text>
          </Heading>
        </CardHeader>
        <CardBody>
          <Text className={roboto.className}>{oneLiner}</Text>
        </CardBody>
        <CardFooter> 
          <Link href={`${link}`}>  
            <Button colorScheme="green" className={roboto.className}>
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardSection;
