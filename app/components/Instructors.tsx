"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

import { Yantramanav, Roboto } from "@next/font/google";
import InstructorsCard from "./InstructorsCard";

const yantramanav = Yantramanav({
  weight: ["700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const Instructors = () => {
  return (
    <Box position="relative" mx="5">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        textAlign="center"
      >
        <Text
          className={yantramanav.className}
          fontWeight={"bold"}
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
          Teachers
        </Text>
      </Heading>

      <Text
        className={roboto.className}
        fontSize={{ base: "15px", lg: "16px" }}
        textAlign={"center"}
        px={{ base: "6", lg: "0" }}
        pt={3}
      >
        Instructors for this course:
      </Text>

      {/* Card */}
      <Box
        w="100%"
        marginBottom="4"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <InstructorsCard
          picture="https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_200_200/0/1638368405154?e=1683763200&v=beta&t=Zc33lymYoAs0_M5avN9P7dYIS0XzodZMtifVZ-NRCUc"
          name="Zia Khan"
          text="CEO of Panacloud, the world’s first Integrated API Ownership Economy,
          Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an
          initiative by the President of Pakistan for AI and computing mass
          education. Mentor and software developer with 20+ years of expertise
          in cloud and serverless computing, software design, project
          management, and API and App development. Expert in concept, business
          modeling & strategy development for startups, specializing in DeFi and
          token economics. Mentored and trained hundreds of thousands of
          developers. Triple masters degrees in business administration,
          engineering, and finance from Arizona State University. Master in
          Economics from KU. Certified Public Accountant and Certified
          Management Accountant in USA."
          linkedInPath="https://www.linkedin.com/in/ziaukhan/"
        />

        <InstructorsCard
          picture="https://media.licdn.com/dms/image/C4E03AQHtvGSpsfadRg/profile-displayphoto-shrink_200_200/0/1517684731220?e=1683763200&v=beta&t=NFcLo7uqus3SOrNRtWsrjg1y1ckBfLdfMYK42oIcEk8"
          name="Zeeshan Hanif"
          text="I am a modern full-stack cloud and blockchain developer with over a decade of experience in developing dynamic applications using MERN Stack and static content with JAMstack together with Infrastructure as Code (IaC). I have developed the front-ends for SaaS and mobile applications, as well as extremely scalable and fault-tolerant back-ends"
          linkedInPath="https://www.linkedin.com/in/zeeshanhanif/"
        />

        <InstructorsCard
          picture="https://media.licdn.com/dms/image/C4D03AQE1Hzv61ccMVw/profile-displayphoto-shrink_200_200/0/1556048207367?e=1683763200&v=beta&t=Oh5Hec6Y-8kEn1iD3DI4Oa2Q3tpFkDuBNAjKaJiHdUU"
          name="Daniyal Nagori"
          text="I am a Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development and deployment of tools, apps and microservices. I am current in my certification for:
          Certified Kubernetes Application Developer"
          linkedInPath="https://www.linkedin.com/in/daniyalnagori/"
        />

        <InstructorsCard
          picture="https://media.licdn.com/dms/image/C4D03AQGeWhSxfJnvlw/profile-displayphoto-shrink_100_100/0/1632680095611?e=1683763200&v=beta&t=X_Am0yqMNVdxn71OCpZFwEzwv3qSLodeBnnxaZzovLQ"
          name="Adil Altaf"
          text="I have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment. I’ve been developing internet-scale apps with MERN Stack and JAMstack technologies deployed on multi-cloud serverless and cloud-native platforms"
          linkedInPath="https://www.linkedin.com/in/adilaltaf/"
        />

        <InstructorsCard
          picture="https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_200_200/0/1562700934047?e=1683763200&v=beta&t=rMZAZebJn3pXpA8FoOosUQdcJtctuKe2dmZKrRbLcow"
          name="Hira Khan"
          text="I have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment. I’ve been developing internet-scale apps with MERN Stack and JAMstack technologies deployed on multi-cloud serverless and cloud-native platforms"
          linkedInPath="https://www.linkedin.com/in/hira-khan-76523540/"
        />
      </Box>
    </Box>
  );
};

export default Instructors;
