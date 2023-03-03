import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CardProps {
  quarter: string;
  oneLiner: string;
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

const CardSection = ({ quarter, oneLiner }: CardProps) => {
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
          <Heading size="md" className={yantramanav.className}>
            {quarter}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text className={roboto.className}>{oneLiner}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="green" className={roboto.className}>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardSection;
