import { Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import CoffeCard from "./coffeeCard";
import coffees from "./constants";
import { makeStyles } from "@material-ui/core";
import { appBarContext } from "./context/appBarContext";

const renderItem = function (item, key) {
  return (
    <Grid item xs={12} sm={6} md={4} key={key}>
      <CoffeCard {...item} key={key} />
    </Grid>
  );
};

const useStyles = makeStyles({
  "mt-10": {
    "margin-top": "15%"
  }
});

export default function Content() {
  const classes = useStyles();
  const { changeTo } = useContext(appBarContext);
  useEffect(() => {
    changeTo(2);
  }, []);
  return (
    <Grid className={classes["mt-10"]} container spacing={4}>
      {coffees.map((coffee, key) => renderItem(coffee, key))}
    </Grid>
  );
}
