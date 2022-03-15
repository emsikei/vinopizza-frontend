import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  );
};
