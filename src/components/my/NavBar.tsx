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
import BookingModal from "./BookingModal";

export default function NavBar() {
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();

  const smoothScrollTo = (targetId: string, duration = 1600) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + window.pageYOffset;
    const distance = end - start;

    let startTime: number;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

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
  const mobileNavItem = {
    fontSize: "lg",
    fontWeight: "500",
    py: 3,
    px: 2,
    borderRadius: "8px",
    transition: "all 0.25s ease",
    _hover: {
      bg: "gold.200",

      transform: "translateX(6px)",
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
      {/* TOP BAR (desktop only) */}
      <Box display={{ base: "none", md: "block" }}>
        <Flex bg="gold.200" px="8" py="2" justify="center">
          <HStack gap="8" fontSize="sm">
            <HStack>
              <Icon as={LuPhone} boxSize="14px" />
              <Text fontWeight="500">+359 884 696 912</Text>
            </HStack>

            <HStack>
              <Icon as={LuMail} boxSize="14px" />
              <Text fontWeight="500">saskamarkov1999@gmail.com</Text>
            </HStack>

            <HStack>
              <Icon as={LuMapPin} boxSize="14px" />
              <Text fontWeight="500">Sofia</Text>
            </HStack>

            <HStack>
              <Icon as={LuClock} boxSize="14px" />
              <Text fontWeight="500">Mon-Sun 09-20</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* MAIN NAV */}
      <Flex
        px={{ base: 4, md: 8 }}
        py="4"
        align="center"
        justify="space-between"
        bg="gold.300"
      >
        {" "}
        {/* LOGO */}
        <Text
          fontFamily="'Cormorant Garamond', serif"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="600"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Shade Atelier
        </Text>
        {/* DESKTOP MENU */}
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
                  setTimeout(() => smoothScrollTo("services"), 100);
                } else {
                  smoothScrollTo("services");
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
                  setTimeout(() => smoothScrollTo("about"), 100);
                } else {
                  smoothScrollTo("about");
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
                  setTimeout(() => smoothScrollTo("contact"), 100);
                } else {
                  smoothScrollTo("contact");
                }
              }}
            >
              Contact
            </Text>
          </HStack>
        </Box>
        <Box flex="1" />
        <Flex display={{ base: "flex", md: "none" }} align="center" gap={4}>
          <Box onClick={onOpen} cursor="pointer">
            <Icon as={LuMenu} boxSize="26px" />
          </Box>
        </Flex>
        <BookingModal>
          <Button
            ml={{ base: 2, md: 0 }}
            px={{ base: 4, md: 7 }}
            py={6}
            borderRadius="full"
            bg="linear-gradient(135deg,  #eac48c, #d6b999)"
            color="black"
            fontWeight="600"
            _hover={{
              bg: "linear-gradient(135deg,  #e6cfad, #d2a371)",
              transform: "translateY(-2px)",
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
            <Drawer.Content bg="linear-gradient(180deg, #f5efe6, #e8d8b5)">
              <Drawer.Header
                borderBottom="1px solid"
                borderColor="blackAlpha.200"
              >
                <Text
                  fontFamily="'Cormorant Garamond', serif"
                  fontSize="2xl"
                  fontWeight="600"
                >
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
                      if (window.location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => smoothScrollTo("services"), 100);
                      } else {
                        smoothScrollTo("services");
                      }
                    }}
                  >
                    Services
                  </Text>

                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      onClose();
                      if (window.location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => smoothScrollTo("about"), 100);
                      } else {
                        smoothScrollTo("about");
                      }
                    }}
                  >
                    About me
                  </Text>

                  <Text
                    {...mobileNavItem}
                    onClick={() => {
                      onClose();
                      if (window.location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => smoothScrollTo("contact"), 100);
                      } else {
                        smoothScrollTo("contact");
                      }
                    }}
                  >
                    Contact
                  </Text>
                </Flex>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton
                  size="lg"
                  position="absolute"
                  top="4"
                  right="4"
                  _hover={{ bg: "blackAlpha.200" }}
                />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
