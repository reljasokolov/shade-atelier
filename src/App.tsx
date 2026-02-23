import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/my/NavBar";
import { ColorModeButton, DarkMode } from "../src/components/ui/color-mode";

function App() {
  return (
    <DarkMode>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
          <ColorModeButton
            position="fixed"
            top="15px"
            right="10px"
            zIndex="1000"
          />
        </GridItem>
        <GridItem area="aside" bg="gold" hideBelow="lg">
          aside
        </GridItem>
        <GridItem area="main" bg="blue">
          main
        </GridItem>
      </Grid>
    </DarkMode>
  );
}

export default App;
