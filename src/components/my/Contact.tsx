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
} from "@chakra-ui/react";

import { useInView } from "./useInView";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

const socials = [
  {
    icon: FaFacebookF,
    url: "https://facebook.com/TVOJ_PROFIL",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/TVOJ_PROFIL",
  },
  {
    icon: FaTiktok,
    url: "https://tiktok.com/@TVOJ_PROFIL",
  },
];
export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: leftRef, isVisible: leftVisible } = useInView();
  const { ref: rightRef, isVisible: rightVisible } = useInView();

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

        <Box w="80px" h="2px" bg="gold.500" borderRadius="full" />

        <Text color="gray.600">Свържи се с мен за въпроси или резервации</Text>

        <Flex gap={6} mt={4}>
          {socials.map((item, i) => (
            <Link key={i} href={item.url} target="_blank">
              <Box
                p={4}
                borderRadius="full"
                bg="whiteAlpha.600"
                cursor="pointer"
                transition="0.3s"
                _hover={{
                  transform: "translateY(-5px) scale(1.05)",
                  bg: "gold.200",
                }}
              >
                <Icon as={item.icon} />
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>

      <Flex
        maxW="1200px"
        mx="auto"
        gap={10}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          ref={leftRef}
          align="start"
          flex="1"
          bg="whiteAlpha.700"
          p={8}
          borderRadius="20px"
          boxShadow="lg"
          gap={6}
          opacity={leftVisible ? 1 : 0}
          transform={leftVisible ? "translateX(0)" : "translateX(-50px)"}
          transition="all 0.7s ease"
        >
          <Flex gap={4} align="center">
            <Box p={3} borderRadius="full" bg="gold.200">
              <Icon as={LuPhone} />
            </Box>
            <Box>
              <Text fontWeight="bold">Телефон</Text>
              <Text color="gray.600">+359 895 614 685</Text>
            </Box>
          </Flex>

          <Flex gap={4} align="center">
            <Box p={3} borderRadius="full" bg="gold.200">
              <Icon as={LuMapPin} />
            </Box>
            <Box>
              <Text fontWeight="bold">Адрес</Text>
              <Text color="gray.600">
                Bedroom Beauty Studio
                <br />
                ул. Емилиян Станев 1
                <br />
                София, България
              </Text>
            </Box>
          </Flex>

          <Flex gap={4} align="center">
            <Box p={3} borderRadius="full" bg="gold.200">
              <Icon as={LuMail} />
            </Box>
            <Box>
              <Text fontWeight="bold">Имейл</Text>
              <Text color="gray.600">contact@denitsamakeup.com</Text>
            </Box>
          </Flex>
        </VStack>

        <VStack
          ref={rightRef}
          flex="1"
          bg="whiteAlpha.700"
          p={8}
          borderRadius="20px"
          boxShadow="lg"
          gap={5}
          align="stretch"
          opacity={rightVisible ? 1 : 0}
          transform={rightVisible ? "translateX(0)" : "translateX(50px)"}
          transition="all 0.7s ease"
        >
          <Heading fontSize="2xl" fontFamily="'Playfair Display', serif">
            Изпрати съобщение
          </Heading>

          <Input placeholder="Вашето име" size="lg" />
          <Input placeholder="your@email.com" size="lg" />
          <Textarea placeholder="Вашето съобщение..." size="lg" />

          <Button
            bg="gold.400"
            color="black"
            borderRadius="full"
            size="lg"
            _hover={{ opacity: 0.9 }}
          >
            Изпрати
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
