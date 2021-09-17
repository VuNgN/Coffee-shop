import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import { white } from "material-ui/styles/colors";
import AppBarItem from "./appBarItem";
import listBtn from "./listBtn";

const useStyle = makeStyles((theme) => ({
  selectdItem: {
    "&:hover": {
      opacity: "0.5",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  borderBottom: {
    "border-bottom": "2px solid #fff"
  },
  TypographyStyles: {
    flex: 1,
    cursor: "pointer"
  },
  logoPage: {
    cursor: "pointer"
  },
  linkText: {
    textDecoration: "none",
    color: white
  },
  listBar: {
    display: "flex",
    alignItems: "center"
  }
}));

const renderListItem = (classes, item, key) => {
  return <AppBarItem classes={classes} {...item} key={key} />;
};

export default function Header(props) {
  const classes = useStyle();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container>
          <Grid item xs={false} sm={2} />
          <List className={classes.listBar}>
            {listBtn.map((item, index) => renderListItem(classes, item, index))}
          </List>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
