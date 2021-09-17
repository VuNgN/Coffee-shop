import { AppBar, Toolbar, Drawer } from "@material-ui/core";
import React, { useContext } from "react";
import { Grid, List, IconButton, Typography } from "@material-ui/core";
import AppBarItem from "./appBarItem";
import listBtn from "./listBtn";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames/bind";
import DrawAppBar from "./drawAppBar";
import { appBarContext } from "../context/appBarContext";
import style from "./style";

const renderListItem = (classes, item, key) => {
  return <AppBarItem classes={classes} {...item} key={key} />;
};

export default function Header() {
  const { open, changeOpen, drawerWidth } = useContext(appBarContext);
  const useStyle = style(drawerWidth);
  const classes = useStyle();
  const handleDrawerOpen = () => {
    changeOpen(true);
  };
  const handleDrawerClose = () => {
    changeOpen(false);
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.menuTitle}>
          Coffee shop
        </Typography>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <DrawAppBar
            renderListItem={renderListItem}
            handleDrawerClose={handleDrawerClose}
          />
        </Drawer>
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
