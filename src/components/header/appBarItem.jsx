import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
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
      <ListItem
        className={classNames(classes.listItem, {
          [classes.borderRight]: isSelected === index
        })}
        button
      >
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </Link>
  );
};
