import { createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  return (
    <AppContext.Provider value={
      {
        cart: [cart, setCart],
        tab: [activeTab, setActiveTab]}
    }>
      {props.children}
    </AppContext.Provider>
  );
};
