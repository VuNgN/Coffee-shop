import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBarProvider } from "./components/context/appBarContext";

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
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/product">
                  <Content />
                </Route>
              </Switch>
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Router>
    </AppBarProvider>
  );
}
