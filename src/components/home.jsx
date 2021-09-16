import React, { useContext } from "react";
import "./css/home.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { appBarContext } from "./context/appBarContext";

export default () => {
  const { changeTo } = useContext(appBarContext);
  return (
    <div className="home">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={5}>
          <Typography variant="h2" gutterBottom>
            This is a website that sells coffee
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4} md={7}></Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" gutterBottom>
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffea species. From the coffee fruit,
            the seeds are separated to produce a stable, raw product: unroasted
            green coffee.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => changeTo(2)}
            >
              Products
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
