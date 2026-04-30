"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  Icon,
  Drawer,
  Portal,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LuPhone, LuMail, LuMapPin, LuClock, LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

export default function NavBar() {
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const navbar = document.querySelector("header");

    const navbarHeight = navbar ? navbar.clientHeight : 100;

    const offset = 10;

    const targetY =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      offset;

    const startY = window.pageYOffset;

    const distance = targetY - startY;

    const duration = 1000;

    let startTime: number;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const time = currentTime - startTime;

      const progress = Math.min(time / duration, 1);

      const eased = ease(progress);

      window.scrollTo(0, startY + distance * eased);

      if (time < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const goToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");

      const interval = setInterval(() => {
        const el = document.getElementById(id);

        if (el) {
          scrollToSection(id);

          clearInterval(interval);
        }
      }, 50);
    } else {
      scrollToSection(id);
    }
  };

  const navItemStyle = {
    cursor: "pointer",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: "600",
    position: "relative",
    transition: "all 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
    _after: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "1px",
      bottom: "-4px",
      left: 0,
      bg: "gold.500",
      transition: "width 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    },
    _hover: {
      color: "gold.600",
      letterSpacing: "0.5px",
      _after: { width: "100%" },
    },
  };

  const mobileNavItem = {
    fontSize: "lg",
    fontWeight: "500",
    py: 3,
    px: 3,
    borderRadius: "10px",
    transition: "all 0.25s ease",
    _active: {
      bg: "gold.300",
      transform: "scale(0.97)",
    },
    _hover: {
      bg: "gold.200",
    },
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      transition="all 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
      bg={scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.55)"}
      backdropFilter={scrolled ? "blur(0px)" : "blur(16px)"}
      boxShadow={scrolled ? "0 15px 40px rgba(0,0,0,0.08)" : "none"}
      borderBottom="1px solid"
      borderColor={scrolled ? "blackAlpha.200" : "transparent"}
    >
      {/* TOP BAR */}
      <Box
        display={{ base: "none", md: "block" }}
        opacity={scrolled ? 0 : 1}
        transform={scrolled ? "translateY(-100%)" : "translateY(0)"}
        transition="all 0.5s ease"
      >
        <Flex bg="gold.200" px="8" py="2" justify="center">
          <HStack gap="8" fontSize="sm">
            <HStack>
              <Icon as={LuPhone} boxSize="14px" />
              <Text>+359 884 696 912</Text>
            </HStack>

            <HStack>
              <Icon as={LuMail} boxSize="14px" />
              <Text>studio@email.com</Text>
            </HStack>

            <HStack>
              <Icon as={LuMapPin} boxSize="14px" />
              <Text>Sofia</Text>
            </HStack>

            <HStack>
              <Icon as={LuClock} boxSize="14px" />
              <Text>Mon-Sun 09-20</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* MAIN NAV */}
      <Flex px={{ base: 4, md: 8 }} py={scrolled ? "3" : "5"} align="center">
        <Text
          fontFamily="'Cormorant Garamond', serif"
          fontSize={scrolled ? "lg" : "2xl"}
          fontWeight="600"
          cursor="pointer"
          transition="all 0.4s ease"
          onClick={() => navigate("/")}
        >
          Shade Atelier
        </Text>

        <Box display={{ base: "none", md: "block" }}>
          <HStack ml="14" gap="10">
            <Text {...navItemStyle} onClick={() => navigate("/")}>
              Home
            </Text>

            <Text {...navItemStyle} onClick={() => goToSection("services")}>
              Services
            </Text>

            <Text {...navItemStyle} onClick={() => goToSection("about")}>
              About me
            </Text>

            <Text {...navItemStyle} onClick={() => goToSection("contact")}>
              Contact
            </Text>
          </HStack>
        </Box>

        <Box flex="1" />

        {/* MOBILE */}
        <Box display={{ base: "flex", md: "none" }} onClick={onOpen}>
          <Icon as={LuMenu} boxSize="26px" cursor="pointer" />
        </Box>

        {/* CTA */}
        <BookingModal>
          <Button
            ml={{ base: 2, md: 0 }}
            px={{ base: 4, md: 7 }}
            py={scrolled ? 5 : 6}
            borderRadius="full"
            bg="linear-gradient(135deg,#eac48c,#d6b999)"
            color="black"
            fontWeight="600"
            transition="all 0.45s cubic-bezier(0.25, 1, 0.5, 1)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            Book Now
          </Button>
        </BookingModal>
      </Flex>

      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Portal>
          <Drawer.Backdrop bg="blackAlpha.600" backdropFilter="blur(6px)" />

          <Drawer.Positioner>
            <Drawer.Content bg="linear-gradient(180deg,#f5efe6,#e8d8b5)">
              <Drawer.Header>
                <Text fontSize="2xl" fontWeight="600">
                  Shade Atelier
                </Text>
              </Drawer.Header>

              <Drawer.Body>
                <Flex direction="column" gap={6} mt={6}>
                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      navigate("/");
                      onClose();
                    }}
                  >
                    Home
                  </Text>

                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      onClose();
                      setTimeout(() => goToSection("services"), 300);
                    }}
                  >
                    Services
                  </Text>

                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      onClose();
                      setTimeout(() => goToSection("about"), 300);
                    }}
                  >
                    About me
                  </Text>

                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      onClose();
                      setTimeout(() => goToSection("contact"), 300);
                    }}
                  >
                    Contact
                  </Text>
                </Flex>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton position="absolute" top="4" right="4" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
