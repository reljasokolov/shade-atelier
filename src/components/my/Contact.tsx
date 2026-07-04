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
import { FaFacebookF, FaInstagram /*FaTiktok*/ } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { /*useRef,*/ useState } from "react";

const socials = [
  { icon: FaFacebookF, url: "https://www.facebook.com/grimsofiamakeup" },
  { icon: FaInstagram, url: "https://www.instagram.com/shadeaatelier/" },
  //{ icon: FaTiktok, url: "https://tiktok.com/@TVOJ_PROFIL" },
];

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: leftRef } = useInView();
  const { ref: rightRef } = useInView();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    try {
      await emailjs.send(
        "service_0poznid",
        "template_45t3gu6",
        {
          name,
          email,
          message,
        },
        "835vvNgVkMjhq01Je",
      );

      alert("Съобщението беше изпратено успешно!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Възникна грешка при изпращането.");
    }
  };

  return (
    <Box
      id="contact"
      bg="gold.100"
      minH="100vh"
      px={{ base: 4, md: 10 }}
      py={20}
    >
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
        >
          <Flex gap={4}>
            <Icon as={LuPhone} />
            <Text>+359 884 696 912</Text>
          </Flex>

          <Flex gap={4}>
            <Icon as={LuMapPin} />
            <Text>
              ж.к. Овча купел 1, ул. "Василий Верешчагин" 521, 1632 София
            </Text>
          </Flex>

          <Flex gap={4}>
            <Icon as={LuMail} />
            <Text>saskamarkov1999@gmail.com</Text>
          </Flex>
        </VStack>

        <VStack
          id="contact-form"
          ref={rightRef}
          flex="1"
          bg="whiteAlpha.700"
          p={8}
          borderRadius="20px"
          boxShadow="lg"
          gap={5}
          scrollMarginTop="100px"
        >
          <Heading fontSize="2xl">Изпрати съобщение</Heading>

          <Input
            placeholder="Вашето име"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Вашият еmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder="Съобщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button bg="#C8BBA5" onClick={sendEmail}>
            Изпрати
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
