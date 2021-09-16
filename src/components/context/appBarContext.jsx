import React, { useState } from "react";
export const appBarContext = React.createContext();
export function AppBarProvider(props) {
  const [isSelected, setSelected] = useState(1);
  function changeTo(tab) {
    setSelected(tab);
  }
  return (
    <appBarContext.Provider
      value={{
        isSelected: isSelected,
        changeTo: changeTo
      }}
    >
      {props.children}
    </appBarContext.Provider>
  );
}
