import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const data = [
  {
    quarter: "Quarter I (Core)",
    oneLiner: "CS-101: Object-Oriented Programming using TypeScript",
  },
  {
    quarter: "Quarter II (Core)",
    oneLiner:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  },
  {
    quarter: "Quarter III (Core)",
    oneLiner:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
  },
];

const CardSection = () => {
  return (
    <>
      <Flex
        justifyContent="space-around"
        direction={{ base: "column", lg: "row" }}
        mx={{ base: "6", lg: "0" }}
        mt={4}
      >
        {data.map((d) => (
          <Card
            margin={1}
            flex="1"
            align="center"
            border="1px"
            borderColor="gray.400"
            w={{ base: "100%", lg: "33%" }}
            // data-aos="fade-down"
            // height={{ base: "240px", lg: "270px" }}
            mt={4}
          >
            <CardHeader>
              <Heading size="md"> {d.quarter} </Heading>
            </CardHeader>
            <CardBody>
              <Text>{d.oneLiner}</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default CardSection;
