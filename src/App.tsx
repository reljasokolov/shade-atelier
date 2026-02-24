import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/my/NavBar";
import { ColorModeButton } from "../src/components/ui/color-mode";

function App() {
  return (
    <Grid
      bg={"bg.canvas"}
      minH="100vh"
      templateRows="auto 1fr"
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
        <ColorModeButton position="fixed" top="0px" right="0px" zIndex="1000" />
      </GridItem>

      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
