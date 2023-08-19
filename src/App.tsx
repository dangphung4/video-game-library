import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` //wider than 1024 px
    }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside">
        <GenereList/>
      </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
