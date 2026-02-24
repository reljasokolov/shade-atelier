import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Button,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";

export default function Navbar() {
  return (
    <Box position="sticky" top="0" zIndex="1000" bg="#d6ccc2" color="#2b2b2b">
      {/* TOP INFO BAR */}
      <Flex bg="#cbbfb3" px="8" py="2" justify="center">
        <HStack fontSize="sm">
          <HStack>
            <Icon as={LuPhone} />
            <Text>+BR TELEFONA</Text>
          </HStack>

          <HStack>
            <Icon as={LuMail} />
            <Text>EMAIL</Text>
          </HStack>

          <HStack>
            <Icon as={LuMapPin} />
            <Text>ADRESA</Text>
          </HStack>

          <HStack>
            <Icon as={LuClock} />
            <Text>RADNO VREME</Text>
          </HStack>
        </HStack>
      </Flex>

      {/* MAIN NAV */}
      <Flex px="6" py="2" align="center">
        {/* LOGO */}
        <Text fontSize="xl" fontWeight="bold">
          LOGO
        </Text>

        {/* LINKS */}
        <HStack ml="4" wordSpacing={"4"}>
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Shop</Link>
          <Link>Team</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
        </HStack>

        {/* PUSH CTA RIGHT */}
        <Box flex="1" />
        {/* CTA BUTTON */}
        <Button bg="#a68a64" color="white" _hover={{ bg: "#927656" }}>
          Book Now
        </Button>
      </Flex>
    </Box>
  );
}
