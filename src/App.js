import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBarProvider } from "./components/context/appBarContext";
import Routers from "./components/Routers";

export default function App() {
  return (
    <AppBarProvider>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Routers />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Router>
    </AppBarProvider>
  );
}
