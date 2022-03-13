import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cartContent: [cart, setCart],
        cartCount: [cartItemsCount, setCartItemsCount]
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
