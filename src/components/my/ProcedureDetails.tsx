import { Box, Flex, Image, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
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
    desc: "Елегантен и дълготраен сватбен грим, съобразен с индивидуалните черти, стил и визия на булката за перфектен външен вид през целия ден.",
    details:
      "Продължителност: 75–90 минути • Включва пробен грим, подготовка на кожата и фиксиране за устойчивост през целия ден и нощ.",
    price: "60€",
  },
  everyday: {
    title: "Ежедневен грим",
    img: everyday,
    desc: "Лек и естествен ежедневен грим, който подчертава естествената красота и придава свеж и поддържан вид през целия ден.",
    details:
      "Продължителност: 40–60 минути • Включва подготовка на кожата, леко покритие, естествено оформяне и фиксиране за дълготраен свеж ефект.",
    price: "40€",
  },
  prom: {
    title: "Абитуриентски грим",
    img: prom,
    desc: "Елегантен и дълготраен абитуриентски грим, създаден да подчертае красотата и индивидуалния стил за един от най-специалните дни.",
    details:
      "Продължителност: 60–75 минути • Включва консултация, подготовка на кожата, подчертаване на очи и контуриране за перфектен завършен вид.",
    price: "60€",
  },
  tentative: {
    title: "Пробен грим",
    img: tentative,
    desc: "Пробен грим, който позволява избор на перфектната визия чрез консултация и тестване на различни стилове според индивидуалните предпочитания.",
    details:
      "Продължителност: 60–90 минути • Включва подробна консултация, избор на визия и проба на грим за постигане на желания краен резултат.",
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

          <Text mt={8} fontSize="2xl" fontWeight="600" color="gold.500">
            Ценa
          </Text>

          <Text mt={4} fontSize="2xl" fontWeight="bold">
            {proc.price}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
