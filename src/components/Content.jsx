import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./coffeeCard";
import coffees from "./constants";
import { makeStyles } from "@material-ui/core/styles";

const renderItem = function (item, key) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CoffeCard {...item} key={key} />
    </Grid>
  );
};

const useStyles = makeStyles({
  "mt-10": {
    "margin-top": "15%"
  }
});

export default (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes["mt-10"]} container spacing={4}>
      {coffees.map((coffee, key) => renderItem(coffee, key))}
    </Grid>
  );
};
