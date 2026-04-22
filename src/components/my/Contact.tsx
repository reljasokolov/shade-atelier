"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";

import { useInView } from "./useInView";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaFacebookF, url: "https://facebook.com/TVOJ_PROFIL" },
  { icon: FaInstagram, url: "https://instagram.com/TVOJ_PROFIL" },
  { icon: FaTiktok, url: "https://tiktok.com/@TVOJ_PROFIL" },
];

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: leftRef } = useInView();
  const { ref: rightRef } = useInView();

  return (
    <Box bg="gold.100" minH="100vh" px={{ base: 4, md: 10 }} py={20}>
      <VStack
        ref={titleRef}
        textAlign="center"
        mb={16}
        opacity={titleVisible ? 1 : 0}
        transform={titleVisible ? "translateY(0)" : "translateY(40px)"}
        transition="all 0.6s ease"
      >
        <Heading fontSize="48px" fontFamily="'Playfair Display', serif">
          Контакти
        </Heading>

        <Box w="80px" h="2px" bg="gold.500" />

        <Text color="gray.600">Свържи се с мен за въпроси или резервации</Text>

        <Flex gap={6} mt={4}>
          {socials.map((item, i) => (
            <Link key={i} href={item.url} target="_blank">
              <Box
                p={4}
                borderRadius="full"
                bg="whiteAlpha.600"
                _hover={{
                  transform: "translateY(-5px)",
                  bg: "gold.200",
                }}
              >
                <Icon as={item.icon} />
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>

      {/* CONTACT */}
      <Flex
        maxW="1200px"
        mx="auto"
        gap={10}
        direction={{ base: "column", md: "row" }}
      >
        {/* LEFT */}
        <VStack
          ref={leftRef}
          align="start"
          flex="1"
          bg="whiteAlpha.700"
          p={8}
          borderRadius="20px"
          boxShadow="lg"
          gap={6}
        >
          <Flex gap={4}>
            <Icon as={LuPhone} />
            <Text>+359 895 614 685</Text>
          </Flex>

          <Flex gap={4}>
            <Icon as={LuMapPin} />
            <Text>Sofia, Bulgaria</Text>
          </Flex>

          <Flex gap={4}>
            <Icon as={LuMail} />
            <Text>contact@email.com</Text>
          </Flex>
        </VStack>

        {/* FORM */}
        <VStack
          ref={rightRef}
          flex="1"
          bg="whiteAlpha.700"
          p={8}
          borderRadius="20px"
          boxShadow="lg"
          gap={5}
        >
          <Heading fontSize="2xl">Изпрати съобщение</Heading>

          <Input placeholder="Вашето име" />
          <Input placeholder="Email" />
          <Textarea placeholder="Съобщение..." />

          <Button bg="gold.400">Изпрати</Button>
        </VStack>
      </Flex>
    </Box>
  );
}
