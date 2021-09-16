import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import classNames from "classnames/bind";
import React, { useContext } from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import HomeIcon from "@material-ui/icons/Home";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { appBarContext } from "./context/appBarContext";

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

export default function Header(props) {
  const classes = useStyle();
  const { isSelected, changeTo } = useContext(appBarContext);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container>
          <Grid item xs={false} sm={2} />
          <List className={classes.listBar}>
            {/* <Typography align="right" variant="h6" className={classes.TypographyStyles}>
              Coffee shop
            </Typography> */}
            <Link
              className={classNames(classes.linkText, {
                [classes.borderBottom]: isSelected === 1
              })}
              to="/"
            >
              <ListItem
                className={classes.selectdItem}
                button
                onClick={() => changeTo(1)}
              >
                <ListItemIcon>
                  <HomeIcon style={{ color: white }} />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Link className={classes.linkText} to="/product">
              <ListItem
                className={classNames(classes.linkText, {
                  [classes.borderBottom]: isSelected === 2
                })}
                button
                onClick={() => changeTo(2)}
              >
                <ListItemIcon>
                  <FreeBreakfastIcon style={{ color: white }} />
                </ListItemIcon>
                <ListItemText>Product</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
