import { makeStyles } from "@material-ui/core";

export default (drawerWidth = 0) => {
  return makeStyles((theme) => ({
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
      [theme.breakpoints.up("md")]: {
        "border-bottom": "2px solid #fff"
      }
    },
    borderRight: {
      [theme.breakpoints.down("sm")]: {
        "border-right": "3px solid"
      }
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
      [theme.breakpoints.up("md")]: {
        color: "white"
      },
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.primary.dark
      }
    },
    listItem: {},
    listItemIcon: {
      [theme.breakpoints.up("md")]: {
        color: "white"
      },
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.primary.dark,
        display: "flex",
        "align-items": "baseline",
        "justify-content": "center"
      }
    },
    listBar: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    menuTitle: {
      display: "flex",
      paddingRight: "100%",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      color: "black",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    }
  }));
};
