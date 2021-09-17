import React, { useContext, useEffect } from "react";
import "./css/home.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { appBarContext } from "./context/appBarContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  BottomInTitle: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    marginTop: "10vh"
  },
  BottomInDescription: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default () => {
  const classes = useStyles();
  const { changeTo } = useContext(appBarContext);
  useEffect(() => {
    changeTo(1);
  }, []);
  return (
    <div className="home">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={5}>
          <Typography variant="h2" gutterBottom>
            This is a website that sells coffee
          </Typography>
        </Grid>
        <Grid item xs={false} sm={false} md={2}>
          {" "}
        </Grid>
        <Grid item xs={false} sm={4} md={5}>
          <Link
            className={classes.BottomInTitle}
            to="/product"
            style={{ textDecoration: "none" }}
          >
            <Button
              className={classes.BottomInTitle}
              variant="outlined"
              color="primary"
              size="large"
            >
              Products
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" gutterBottom>
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffea species. From the coffee fruit,
            the seeds are separated to produce a stable, raw product: unroasted
            green coffee.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link
            className={classes.BottomInDescription}
            to="/product"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" color="primary" size="large">
              Products
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
