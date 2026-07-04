import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import banner from "../../assets/banner.jpg";
import BookingModal from "./BookingModal";

export default function Home() {
  return (
    <Box w="100%">
      <Box
        h={{ base: "500px", md: "600px" }}
        backgroundImage={`url(${banner})`}
        backgroundSize="cover"
        backgroundPosition={{ base: "center", md: "center 40%" }}
        position="relative"
      >
        <Box position="absolute" inset="0" bg="blackAlpha.500" />

        <Flex
          position="relative"
          h="100%"
          align="center"
          justify={{ base: "center", md: "flex-start" }}
          px={{ base: 6, md: 16 }}
          pt={{ base: "40px", md: "120px" }}
        >
          <Box
            mt={{ base: 20, md: 51 }}
            backdropFilter="blur(2px)"
            bg="rgba(206, 180, 149, 0.45)"
            border="1px solid"
            borderColor="rgba(255,255,255,0.25)"
            borderRadius="30px"
            p={{ base: 6, md: 10 }}
            maxW="420px"
            w="100%"
            color="white"
            boxShadow="0 20px 60px rgba(0,0,0,0.35)"
          >
            <Text
              fontWeight="bold"
              fontSize="32px"
              textAlign="center"
              letterSpacing="2px"
              color="black"
            >
              Beauty Studio
            </Text>

            <Heading fontSize="26px" textAlign="center" mt={1} color="black">
              Shadé Atelier
            </Heading>

            <Text
              mt={5}
              opacity={0.85}
              fontSize="sm"
              lineHeight="1.6"
              color="black"
            >
              Красотата е в детайлите. Всяка визия е създадена с внимание,
              прецизност и стремеж да подчертае естественото излъчване на всяка
              клиентка.
            </Text>
            <BookingModal>
              <Button
                mt={6}
                w="full"
                size="lg"
                bg="linear-gradient(135deg, #C6AE8A, #d6b999)"
                color="black"
                fontWeight="600"
                letterSpacing="0.5px"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                }}
              >
                Запази час
                <RiArrowRightLine />
              </Button>
            </BookingModal>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
