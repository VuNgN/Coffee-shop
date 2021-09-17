import { Divider, IconButton, List } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import listBtn from "./listBtn";
import style from "./style";

const useStyle = style();

export default ({ renderListItem, handleDrawerClose }) => {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {listBtn.map((item, index) => renderListItem(classes, item, index))}
      </List>
    </>
  );
};
