import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function AboutMe() {
  return (
    <Box bg="gold.100" minH="100vh" px={{ base: 4, md: 10 }} py={16}>
      <MotionFlex
        maxW="1200px"
        mx="auto"
        gap={12}
        direction={{ base: "column", md: "row" }}
        align="center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* IMAGE */}
        <MotionBox
          position="relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f"
            borderRadius="20px"
            w={{ base: "100%", md: "400px" }}
            h="500px"
            objectFit="cover"
            boxShadow="xl"
            transition="0.4s"
            _hover={{ transform: "scale(1.03)" }}
          />

          {/* frame */}
          <Box
            position="absolute"
            top="20px"
            left="20px"
            w="100%"
            h="100%"
            border="1px solid"
            borderColor="blackAlpha.200"
            borderRadius="20px"
            zIndex={-1}
          />
        </MotionBox>

        {/* TEXT */}
        <MotionBox
          flex="1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack align="start" gap={5}>
            <Heading fontFamily="'Playfair Display', serif" fontSize="4xl">
              За мен
            </Heading>

            <MotionBox
              w="80px"
              h="2px"
              bg="gold.500"
              borderRadius="full"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.6 }}
            />

            <Text color="gray.600" lineHeight="1.8">
              Аз съм Деница Караджачка, професионален гримьор, базиран в София,
              България. Имам над 10 години опит в индустрията.
            </Text>

            <Text color="gray.600" lineHeight="1.8">
              Гримът за мен е не просто работа — той е изкуство и страст.
            </Text>

            <Heading fontSize="2xl" fontFamily="'Playfair Display', serif">
              Защо да избереш мен
            </Heading>

            <VStack align="start" gap={2} color="gray.600">
              <Text>• Индивидуален подход</Text>
              <Text>• Премиум продукти</Text>
              <Text>• Дълготраен резултат</Text>
              <Text>• Висока хигиена</Text>
            </VStack>

            <Heading fontSize="2xl" fontFamily="'Playfair Display', serif">
              Локация
            </Heading>

            <Text color="gray.600">София + мобилни услуги за събития.</Text>

            {/* BUTTONS */}
            <Flex gap={4} pt={4}>
              <Button
                bg="#1f2a37"
                color="white"
                borderRadius="full"
                _hover={{
                  bg: "#111827",
                  transform: "translateY(-2px)",
                }}
              >
                Свържи се
              </Button>

              <Button
                bg="gold.400"
                color="black"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Запази час
              </Button>
            </Flex>
          </VStack>
        </MotionBox>
      </MotionFlex>
    </Box>
  );
}
