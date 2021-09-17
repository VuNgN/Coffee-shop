import React, { useState } from "react";
export const appBarContext = React.createContext();
export function AppBarProvider(props) {
  const [isSelected, setSelected] = useState(1);
  const [open, setOpen] = useState(false);
  function changeTo(tab) {
    setSelected(tab);
  }
  function changeOpen(bool) {
    setOpen(bool);
  }
  const drawerWidth = 240;
  return (
    <appBarContext.Provider
      value={{
        isSelected: isSelected,
        changeTo: changeTo,
        open: open,
        changeOpen: changeOpen,
        drawerWidth: drawerWidth
      }}
    >
      {props.children}
    </appBarContext.Provider>
  );
}
