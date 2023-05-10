import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const shopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [buttonPop, setButtonPop] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };

  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <shopContext.Provider
      value={{
        buttonPop,
        setButtonPop,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
