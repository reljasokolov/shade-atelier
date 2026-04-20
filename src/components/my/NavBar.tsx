import { Box, Flex, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";
import BookingModal from "./BookingModal";

export default function NavBar() {
  const navigate = useNavigate(); // za navigaciju

  const smoothScrollTo = (targetId: string, duration = 1600) => {
    // funkcija za skrolovanje do elementa, 1.6s
    const target = document.getElementById(targetId); // pronalazenje elementa
    if (!target) return;

    const start = window.pageYOffset; // trenutna
    const end = target.getBoundingClientRect().top + window.pageYOffset; // gde se nalazi element
    const distance = end - start; // koliko da skroluje

    let startTime: number; // vreme pocetka animacije

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }; // brzina animacije (smooth)

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * eased);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

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
      <Box display={{ base: "none", md: "block" }}>
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

      <Flex px={{ base: 4, md: 8 }} py="4" align="center" bg="gold.300">
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

        <Box display={{ base: "none", md: "block" }}>
          <HStack ml="14" gap="10">
            <Text {...navItemStyle} onClick={() => navigate("/")}>
              Home
            </Text>

            <Text
              {...navItemStyle}
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => smoothScrollTo("services", 1000), 100);
                } else {
                  smoothScrollTo("services", 1800);
                }
              }}
            >
              Services
            </Text>
            <Text
              {...navItemStyle}
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => smoothScrollTo("about", 2000), 100);
                } else {
                  smoothScrollTo("about", 1800);
                }
              }}
            >
              About me
            </Text>
            <BookingModal>
              <Text {...navItemStyle}>Shop</Text>
            </BookingModal>

            <Text
              {...navItemStyle}
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => smoothScrollTo("contact", 1800), 100);
                } else {
                  smoothScrollTo("contact", 1800);
                }
              }}
            >
              Contact
            </Text>
          </HStack>
        </Box>

        <Box flex="1" />

        <Box display={{ base: "flex", md: "none" }}>
          <HStack gap={2}>
            <Icon as={LuMail} boxSize="16px" />
            <Text fontSize="sm">studio@email.com</Text>
          </HStack>
        </Box>

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
