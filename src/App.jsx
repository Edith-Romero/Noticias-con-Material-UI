import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvaider } from "./context/NoticiasProvaider";


function App() {
  return (
    <NoticiasProvaider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />

      </Container>
    </NoticiasProvaider>
  );
}

export default App;
