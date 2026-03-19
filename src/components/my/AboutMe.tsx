import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box bg="gold.100" minH="100vh" px={{ base: 4, md: 10 }} py={16}>
      <Flex
        maxW="1200px"
        mx="auto"
        gap={12}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        {/* IMAGE */}
        <Box position="relative">
          <Image
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f"
            borderRadius="20px"
            w={{ base: "100%", md: "400px" }}
            h="500px"
            objectFit="cover"
            boxShadow="xl"
          />

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
        </Box>

        <VStack align="start" flex="1">
          <Heading fontFamily="'Playfair Display', serif" fontSize="4xl">
            За мен
          </Heading>
          <Box mt={3} w="80px" h="2px" bg="gold.500" borderRadius="full" />

          <Text color="gray.600" lineHeight="1.8">
            Аз съм Деница Караджачка, професионален гримьор, базиран в София,
            България. Имам над 10 години опит в индустрията, включително работа
            с водещи козметични брандове и участие в множество кампании.
          </Text>

          <Text color="gray.600" lineHeight="1.8">
            Гримът за мен е не просто работа — той е изкуство и страст. Всеки
            клиент е уникален и моята мисия е да подчертая естествената красота
            и индивидуалност.
          </Text>

          <Heading fontSize="2xl" fontFamily="'Playfair Display', serif" pt={4}>
            Защо да избереш мен
          </Heading>

          <VStack align="start" color="gray.600">
            <Text>• Индивидуален подход към всеки клиент</Text>
            <Text>• Премиум продукти от водещи марки</Text>
            <Text>• Дълготраен и безупречен резултат</Text>
            <Text>• Високи хигиенни стандарти</Text>
          </VStack>

          <Heading fontSize="2xl" fontFamily="'Playfair Display', serif" pt={4}>
            Локация
          </Heading>

          <Text color="gray.600">
            Работя основно в София, но предлагам и мобилни услуги за специални
            събития и поводи.
          </Text>

          <Flex gap={4} pt={4}>
            <Button
              bg="#1f2a37"
              color="white"
              borderRadius="full"
              _hover={{ bg: "#111827" }}
            >
              Свържи се с мен
            </Button>

            <Button
              bg="gold.400"
              color="black"
              borderRadius="full"
              _hover={{ opacity: 0.9 }}
            >
              Запази час
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
