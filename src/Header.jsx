import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  TypographyStyles: {
    flex: 1
  }
}));

export default function Header(props) {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={false} sm={2} />
          <Typography className={classes.TypographyStyles}>
            Coffee shop
          </Typography>
          <FreeBreakfastIcon />
          <Grid item xs={false} sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
