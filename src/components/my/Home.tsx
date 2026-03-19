import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
  return (
    <Box w="100vw" position="relative" left="50%" transform="translateX(-50%)">
      <Box
        h={{ base: "500px", md: "650px" }}
        backgroundImage="url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        {/* overlay */}
        <Box position="absolute" inset="0" bg="blackAlpha.500" />

        <Flex
          position="relative"
          h="100%"
          align="center"
          px={{ base: 6, md: 16 }}
        >
          <Box
            backdropFilter="blur(18px)"
            bg="rgba(183, 155, 118, 0.45)"
            border="1px solid"
            borderColor="rgba(255,255,255,0.25)"
            borderRadius="30px"
            p={10}
            maxW="420px"
            color="white"
            boxShadow="0 20px 60px rgba(0,0,0,0.35)"
          >
            <Text
              fontWeight="bold"
              fontSize="32px"
              textAlign="center"
              letterSpacing="2px"
            >
              Beauty Studio
            </Text>

            <Heading fontSize="26px" textAlign="center" mt={1} color="gold.300">
              Shade Atelier
            </Heading>

            <Text mt={5} opacity={0.85} fontSize="sm" lineHeight="1.6">
              NEKI UMETNIČKI TEKST NEKI UMETNIČKI TEKST NEKI UMETNIČKI TEKST
              NEKI UMETNIČKI TEKST NEKI UMETNIČKI TEKST.
            </Text>

            <Button
              mt={6}
              w="full"
              size="lg"
              bg="linear-gradient(135deg, #e9cb79, #91751a)"
              color="black"
              fontWeight="600"
              letterSpacing="0.5px"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
              }}
            >
              Book Appointment
              <RiArrowRightLine />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
