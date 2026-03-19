import { Box, Flex, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";

export default function NavBar() {
  const navigate = useNavigate();

  const navItemStyle = {
    cursor: "pointer",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: "600",
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "1px",
      bottom: "-4px",
      left: 0,
      bg: "black",
      transition: "width 0.3s ease",
    },
    _hover: {
      _after: { width: "100%" },
    },
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="gold.200"
      backdropFilter="blur(10px)"
    >
      <Flex bg="gold.300" px="8" py="2" justify="center">
        <HStack gap="6" fontSize="sm">
          <HStack>
            <Icon as={LuPhone} boxSize="14px" />
            <Text fontFamily="'Cormorant Garamond', serif" fontWeight="500">
              +381 00 000 000
            </Text>
          </HStack>

          <HStack>
            <Icon as={LuMail} boxSize="14px" />
            <Text fontFamily="'Cormorant Garamond', serif" fontWeight="500">
              studio@email.com
            </Text>
          </HStack>

          <HStack>
            <Icon as={LuMapPin} boxSize="14px" />
            <Text fontFamily="'Cormorant Garamond', serif" fontWeight="500">
              Belgrade
            </Text>
          </HStack>

          <HStack>
            <Icon as={LuClock} boxSize="14px" />
            <Text fontFamily="'Cormorant Garamond', serif" fontWeight="500">
              Mon-Sat 09-18
            </Text>
          </HStack>
        </HStack>
      </Flex>

      <Flex
        px="8"
        py="4"
        align="center"
        borderTop="1px solid"
        borderColor="blackAlpha.200"
      >
        <Text
          fontFamily="'Cormorant Garamond', serif"
          fontSize="2xl"
          fontWeight="600"
          letterSpacing="0.5px"
        >
          Shade Atelier
        </Text>

        <HStack ml="14" gap="10">
          <Text {...navItemStyle} onClick={() => navigate("/")}>
            Home
          </Text>

          <Text {...navItemStyle} onClick={() => navigate("/services")}>
            Services
          </Text>

          <Text {...navItemStyle}>Shop</Text>

          <Text {...navItemStyle}>Team</Text>

          <Text {...navItemStyle}>Pricing</Text>

          <Text {...navItemStyle}>Contact</Text>
        </HStack>

        <Box flex="1" />

        <Button
          bg="linear-gradient(135deg,#e8d3a3,#b79b76)"
          color="black"
          borderRadius="full"
          px="6"
          fontWeight="600"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        >
          Book Now
        </Button>
      </Flex>
    </Box>
  );
}
