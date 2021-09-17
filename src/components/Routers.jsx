import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Content from "./Content";
import Home from "./home";
import { appBarContext } from "./context/appBarContext";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames/bind";

let drawerWidth;
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  }
}));
const updateDrawerWidth = (value) => {
  drawerWidth = value;
};

export default () => {
  const { open, changeOpen, drawerWidth } = useContext(appBarContext);
  updateDrawerWidth(drawerWidth);
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Content />
        </Route>
      </Switch>
    </div>
  );
};
