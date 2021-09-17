import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { appBarContext } from "../context/appBarContext";

export default ({ classes, name, icon, index, path }) => {
  const { isSelected } = useContext(appBarContext);
  return (
    <Link
      className={classNames(classes.linkText, {
        [classes.borderBottom]: isSelected === index
      })}
      to={path}
    >
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </Link>
  );
};
