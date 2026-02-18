import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/my/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" bg="gold" hideBelow="lg">
        aside
      </GridItem>
      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
