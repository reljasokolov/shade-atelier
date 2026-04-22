import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import night from "../../assets/night.png";
import weding from "../../assets/weding.png";
import everyday from "../../assets/everyday.png";
import prom from "../../assets/prom.png";
import tentative from "../../assets/tentative.png";

const data = {
  night: {
    title: "Вечерен грим",
    img: night,
    desc: "Професионален вечерен грим, който подчертава чертите на лицето и придава изискан и дълготраен блясък.",
    details:
      "Продължителност: 60–75 минути • Включва консултация, подготовка на кожата и фиксиране за дълготраен ефект.",
    price: "50€",
  },
  weding: {
    title: "Сватбен грим",
    img: weding,
    desc: "Елегантен и дълготраен сватбен грим, съобразен с индивидуалните черти, стил и визия на булката.",
    details:
      "Продължителност: 75–90 минути • Включва пробен грим и фиксиране за устойчивост.",
    price: "60€",
  },
  everyday: {
    title: "Ежедневен грим",
    img: everyday,
    desc: "Лек и естествен грим за свеж и поддържан вид през целия ден.",
    details:
      "Продължителност: 40–60 минути • Подготовка на кожата и леко покритие.",
    price: "40€",
  },
  prom: {
    title: "Абитуриентски грим",
    img: prom,
    desc: "Елегантен грим за един от най-специалните дни.",
    details:
      "Продължителност: 60–75 минути • Подчертаване на очи и контуриране.",
    price: "60€",
  },
  tentative: {
    title: "Пробен грим",
    img: tentative,
    desc: "Проба и izbor savršene vizije.",
    details: "Продължителност: 60–90 минути • Консултация и тест.",
    price: "50€",
  },
};

export default function ProcedureDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const proc = data[id as keyof typeof data];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [id]);

  if (!proc) return <Text>Not found</Text>;

  return (
    <Box maxW="1200px" mx="auto" py={20} px={4}>
      <Flex gap={{ base: 4, md: 10 }} align="start" direction="row">
        {/* SIDEBAR */}
        <VStack
          w={{ base: "140px", md: "260px" }}
          align="stretch"
          gap={2}
          position="sticky"
          top="100px"
        >
          {Object.entries(data).map(([key, item]) => {
            const isActive = key === id;

            return (
              <Box
                key={key}
                px={3}
                py={3}
                borderRadius="md"
                cursor="pointer"
                position="relative"
                fontWeight="500"
                fontSize={{ base: "sm", md: "md" }}
                color={isActive ? "gold.600" : "gray.700"}
                bg={isActive ? "gold.100" : "transparent"}
                transition="all 0.25s ease"
                _hover={{
                  bg: "gold.100",
                  color: "gold.600",
                  pl: "16px",
                }}
                _before={
                  isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "20%",
                        height: "60%",
                        width: "3px",
                        bg: "gold.500",
                        borderRadius: "full",
                      }
                    : {}
                }
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

          {/* CONTACT */}
        </VStack>

        {/* CONTENT */}
        <Box
          flex="1"
          opacity={animate ? 1 : 0}
          transform={animate ? "translateY(0px)" : "translateY(20px)"}
          transition="all 0.4s ease"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="600"
            letterSpacing="0.5px"
            fontFamily="'Playfair Display', serif"
            mb={4}
            color="gold.600"
          >
            {proc.title}
          </Text>

          <Flex gap={6} direction="column">
            <Image
              src={proc.img}
              borderRadius="20px"
              w="100%"
              maxW={{ base: "100%", md: "500px" }} // 👈 OVO
              objectFit="cover"
            />

            <VStack align="start" gap={6}>
              <Text color="gray.600" lineHeight="1.8" fontSize="md">
                {proc.desc}
              </Text>
              <Text fontSize="sm" lineHeight="1.7">
                {proc.details}
              </Text>
            </VStack>
          </Flex>
          <Box
            mt={5}
            p={3}
            borderRadius="2xl"
            bg="linear-gradient(135deg, #f1e2c6, #d4b06a)"
            boxShadow="0 10px 30px rgba(0,0,0,0.15)"
            maxW="200px"
          >
            <Text
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="1px"
              opacity={0.7}
            >
              Цена
            </Text>

            <Text mt={2} fontSize="3xl" fontWeight="700">
              {proc.price}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
