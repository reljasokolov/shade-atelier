import { Box, Flex, Image, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { useEffect, useState } from "react";

const data = {
  hydrafacial: {
    title: "Hydrafacial Platinum",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
    desc: "Луксозна процедура за дълбоко почистване и хидратация на кожата.",
    details: "Продължителност: 60 минути • Резултат веднага след процедурата.",
    price: "120€",
  },
  laser: {
    title: "Laser Epilation",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    desc: "Дълготрайно премахване на нежеланото окосмяване.",
    details: "Продължителност: 45 минути • 6+ третмана за максимален ефект.",
    price: "80€",
  },
  microneedling: {
    title: "Microneedling",
    img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
    desc: "Подобрява текстурата и стимулира колаген.",
    details: "Продължителност: 50 минути • Видими резултати след 2 процедури.",
    price: "100€",
  },
  body: {
    title: "Body Therapy",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    desc: "Релаксираща терапия за тяло и ум.",
    details: "Продължителност: 70 минути • Пълен релакс.",
    price: "90€",
  },
};

export default function ProcedureDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const proc = data[id as keyof typeof data];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [id]);

  if (!proc) return <Text>Not found</Text>;

  return (
    <Box maxW="1200px" mx="auto" py={20} px={6}>
      <Flex gap={10} align="start" direction={{ base: "column", md: "row" }}>
        <VStack w="260px" align="stretch" gap={4}>
          {Object.entries(data).map(([key, item]) => {
            const isActive = key === id;

            return (
              <Box
                key={key}
                p={4}
                borderRadius="lg"
                cursor="pointer"
                bg={isActive ? "gold.400" : "white"}
                color={isActive ? "white" : "black"}
                fontWeight="500"
                transition="all 0.25s ease"
                _hover={{
                  bg: "gold.300",
                  transform: "translateX(5px)",
                }}
                onClick={() => {
                  if (key === id) return;

                  setAnimate(false);

                  setTimeout(() => {
                    navigate(`/procedure/${key}`);
                  }, 150);
                }}
              >
                {item.title}
              </Box>
            );
          })}

          <Box bg="white" p={5} borderRadius="lg" mt={4} boxShadow="md">
            <Text mb={4} fontWeight="bold">
              Контакти
            </Text>

            <VStack align="start" gap={4}>
              <HStack>
                <Icon as={LuPhone} />
                <Text fontSize="sm">+359 895 614 685</Text>
              </HStack>

              <HStack>
                <Icon as={LuMail} />
                <Text fontSize="sm">contact@email.com</Text>
              </HStack>

              <HStack>
                <Icon as={LuMapPin} />
                <Text fontSize="sm">Sofia, Bulgaria</Text>
              </HStack>
            </VStack>
          </Box>
        </VStack>

        <Box
          flex="1"
          key={id}
          opacity={animate ? 1 : 0}
          transform={animate ? "translateY(0px)" : "translateY(20px)"}
          transition="all 0.4s ease"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={6} color="gold.500">
            {proc.title}
          </Text>

          <Flex gap={8} direction={{ base: "column", md: "row" }}>
            <Image
              src={proc.img}
              borderRadius="20px"
              w="100%"
              maxW="400px"
              objectFit="cover"
              transition="0.3s"
              _hover={{ transform: "scale(1.02)" }}
            />

            <VStack align="start" gap={5}>
              <Text color="gray.600" lineHeight="1.8">
                {proc.desc}
              </Text>

              <Text lineHeight="1.8">{proc.details}</Text>
            </VStack>
          </Flex>

          <Text mt={10} fontSize="2xl" fontWeight="600" color="gold.500">
            Детайли за услугата
          </Text>

          <Text mt={4} color="gray.600">
            {proc.details}
          </Text>

          <Text mt={8} fontSize="2xl" fontWeight="600" color="gold.500">
            Цени
          </Text>

          <Text mt={4} fontSize="2xl" fontWeight="bold">
            {proc.price}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
