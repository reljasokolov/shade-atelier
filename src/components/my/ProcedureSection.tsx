"use client";

import { Box, Text, Image, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const procedures = [
  {
    id: "hydrafacial",
    title: "Hydrafacial Platinum",
    price: "112€",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800",
  },
  {
    id: "laser",
    title: "Laser Epilation",
    price: "51€",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
  },
  {
    id: "microneedling",
    title: "Microneedling",
    price: "77€",
    img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800",
  },
  {
    id: "body",
    title: "Body Therapy",
    price: "90€",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800",
  },
];

export default function ProcedureSection() {
  const navigate = useNavigate();

  return (
    <Box maxW="1400px" mx="auto" py={20} px={6}>
      {/* TITLE */}
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

      {/* SLIDER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        observer
        observeParents
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
              gap={5}
              onClick={() => navigate(`/procedure/${proc.id}`)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <MotionBox
                borderRadius="full"
                overflow="hidden"
                w="220px"
                h="220px"
                boxShadow="lg"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.1 }}
              >
                <Image src={proc.img} w="100%" h="100%" objectFit="cover" />
              </MotionBox>

              {/* LINE */}
              <MotionBox
                h="2px"
                bg="gold.500"
                borderRadius="full"
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.4 }}
              />

              {/* PRICE */}
              <Box textAlign="center" mt={4}>
                <Text fontSize="lg" color="gold.500">
                  Цена
                </Text>

                <Text fontSize="2xl" fontWeight="600">
                  {proc.price}
                </Text>
              </Box>

              {/* BUTTON */}
              <Button
                size="sm"
                variant="link"
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
  );
}
