import { Box, Flex, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";
import BookingModal from "./BookingModal";

export default function NavBar() {
  const navigate = useNavigate();

  const navItemStyle = {
    cursor: "pointer",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: "600",
    position: "relative",
    transition: "all 0.3s ease",
    _after: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "1px",
      bottom: "-4px",
      left: 0,
      bg: "gold.500",
      transition: "width 0.3s ease",
    },
    _hover: {
      color: "gold.600",
      letterSpacing: "0.5px",
      _after: { width: "100%" },
    },
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(255,255,255,0.7)"
      backdropFilter="blur(14px)"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
    >
      {/* 🔥 TOP BAR (DESKTOP ONLY) */}
      <Box display={{ base: "none", md: "block" }}>
        {" "}
        <Flex bg="gold.200" px="8" py="2" justify="center">
          <HStack gap="8" fontSize="sm">
            <HStack>
              <Icon as={LuPhone} boxSize="14px" />
              <Text fontWeight="500">+381 00 000 000</Text>
            </HStack>

            <HStack>
              <Icon as={LuMail} boxSize="14px" />
              <Text fontWeight="500">studio@email.com</Text>
            </HStack>

            <HStack>
              <Icon as={LuMapPin} boxSize="14px" />
              <Text fontWeight="500">Belgrade</Text>
            </HStack>

            <HStack>
              <Icon as={LuClock} boxSize="14px" />
              <Text fontWeight="500">Mon-Sat 09-18</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* 🔥 MAIN NAV */}
      <Flex px={{ base: 4, md: 8 }} py="4" align="center" bg="gold.300">
        {/* LOGO */}
        <Text
          fontFamily="'Cormorant Garamond', serif"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="600"
          letterSpacing="0.5px"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Shade Atelier
        </Text>

        {/* 🔥 DESKTOP MENU */}
        <Box display={{ base: "none", md: "block" }}>
          {" "}
          <HStack ml="14" gap="10">
            <Text {...navItemStyle} onClick={() => navigate("/")}>
              Home
            </Text>

            <Text {...navItemStyle} onClick={() => navigate("/services")}>
              Services
            </Text>
            <BookingModal>
              <Text {...navItemStyle}>Shop</Text>
            </BookingModal>
            <Text {...navItemStyle}>Team</Text>
            <Text {...navItemStyle}>Pricing</Text>

            <Text {...navItemStyle} onClick={() => navigate("/contact")}>
              Contact
            </Text>
          </HStack>
        </Box>

        <Box flex="1" />

        {/* 🔥 MOBILE (MAIL ONLY) */}
        <Box display={{ base: "flex", md: "none" }}>
          {" "}
          <HStack gap={2}>
            <Icon as={LuMail} boxSize="16px" />
            <Text fontSize="sm">studio@email.com</Text>
          </HStack>
        </Box>

        {/* 🔥 CTA BUTTON */}
        <BookingModal>
          <Button
            ml={{ base: 2, md: 0 }}
            px={{ base: 5, md: 7 }}
            py={6}
            borderRadius="full"
            bg="gold.400"
            color="black"
            fontWeight="600"
            letterSpacing="0.5px"
            transition="all 0.25s ease"
            _hover={{
              bg: "gold.500",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
            _active={{
              transform: "scale(0.96)",
            }}
          >
            Book Now
          </Button>
        </BookingModal>
      </Flex>
    </Box>
  );
}
