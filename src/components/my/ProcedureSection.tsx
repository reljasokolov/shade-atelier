"use client";

import { Box, Text, Image, Button, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useInView } from "./useInView";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const procedures = [
  {
    id: "hydrafacial",
    title: "Hydrafacial Platinum",
    price: "112€",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
  },
  {
    id: "laser",
    title: "Laser Epilation",
    price: "51€",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: "microneedling",
    title: "Microneedling",
    price: "77€",
    img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
  },
  {
    id: "body",
    title: "Body Therapy",
    price: "90€",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
];

export default function ProcedureSection() {
  const navigate = useNavigate();

  const fadeUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const { ref, isVisible } = useInView();
  return (
    <Box ref={ref} maxW="1400px" mx="auto" py={20} px={6}>
      {/* 🔥 TITLE */}
      <Box mb={16}>
        <Text
          fontSize="34px"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          Услуги
        </Text>

        {/* ✨ LUX LINE */}
        <Box mt={3} w="80px" h="2px" bg="gold.500" borderRadius="full" />
      </Box>

      {/* 🔥 SLIDER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
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
            <VStack
              cursor="pointer"
              onClick={() => navigate(`/procedure/${proc.id}`)}
              spacing={5}
              opacity={isVisible ? 1 : 0}
              transform={isVisible ? "translateY(0)" : "translateY(40px)"}
              transition="all 0.6s ease"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* 🔥 IMAGE */}
              <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                w="220px"
                h="220px"
                boxShadow="xl"
                transition="all 0.4s ease"
                _hover={{
                  transform: "scale(1.07)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Image src={proc.img} w="100%" h="100%" objectFit="cover" />

                {/* ✨ GLOW OVERLAY */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="linear-gradient(to top, rgba(0,0,0,0.25), transparent)"
                  opacity="0"
                  transition="0.3s"
                  _hover={{ opacity: 1 }}
                />
              </Box>

              {/* TEXT */}
              <Text
                fontWeight="600"
                fontFamily="'Cormorant Garamond', serif"
                fontSize="18px"
              >
                {proc.title}
              </Text>

              <Text color="gray.500">{proc.price}</Text>

              <Button
                size="sm"
                variant="link"
                color="gold.500"
                fontWeight="600"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/procedure/${proc.id}`);
                }}
                _hover={{
                  letterSpacing: "0.5px",
                }}
              >
                Разбери повече →
              </Button>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
