import "./styles.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}
