"use client";

import { Box, Text, Image, Button, VStack, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import night from "../../assets/night.png";
import weding from "../../assets/weding.png";
import everyday from "../../assets/everyday.png";
import prom from "../../assets/prom.png";
import tentative from "../../assets/tentative.png";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const procedures = [
  { id: "night", title: "Вечерен грим", price: "50€", img: night },
  { id: "weding", title: "Сватбен грим", price: "60€", img: weding },
  { id: "everyday", title: "Eжедневен грим", price: "40€", img: everyday },
  { id: "prom", title: "Абитуриентски грим", price: "60€", img: prom },
  { id: "tentative", title: "Пробен грим", price: "50€", img: tentative },
];

export default function ProcedureSection() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box maxW="1400px" mx="auto" py={20} px={6} id="services">
      <MotionBox
        mb={16}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Text
          fontSize="34px"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          Услуги
        </Text>

        <MotionBox
          mt={3}
          h="2px"
          bg="gold.500"
          borderRadius="full"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.5 }}
        />
      </MotionBox>

      <Box position="relative">
        <IconButton
          position="absolute"
          left="-20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          borderRadius="full"
          bg="white"
          color="gold.500"
          boxShadow="lg"
          _hover={{
            bg: "gold.500",
            color: "white",
          }}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          position="absolute"
          right="-20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          borderRadius="full"
          bg="white"
          color="gold.500"
          boxShadow="lg"
          _hover={{
            bg: "gold.500",
            color: "white",
          }}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </IconButton>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {procedures.map((proc, index) => (
            <SwiperSlide key={proc.id}>
              <MotionVStack
                cursor="pointer"
                gap={3}
                onClick={() => navigate(`/procedure/${proc.id}`)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Text
                  fontSize="18px"
                  fontWeight="500"
                  textTransform="uppercase"
                  color="gold.700"
                  textAlign="center"
                  fontFamily="'Playfair Display', serif"
                >
                  {proc.title}
                </Text>

                <MotionBox
                  borderRadius="full"
                  overflow="hidden"
                  w="220px"
                  h="220px"
                  boxShadow="lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image src={proc.img} w="100%" h="100%" objectFit="cover" />
                </MotionBox>

                <MotionBox
                  h="2px"
                  bg="gold.500"
                  borderRadius="full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.4 }}
                />

                <Box textAlign="center" mt={4}>
                  <Text fontSize="lg" color="gold.500">
                    Цена
                  </Text>
                  <Text fontSize="2xl" fontWeight="600">
                    {proc.price}
                  </Text>
                </Box>

                <Button
                  size="sm"
                  variant="plain"
                  color="gold.500"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/procedure/${proc.id}`);
                  }}
                  _hover={{ textDecoration: "underline" }}
                >
                  Разбери повече →
                </Button>
              </MotionVStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
