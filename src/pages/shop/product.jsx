import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/productimg/" + image}
        alt="no-show"
        className="img"
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />

      <div className="namePrice">
        <div className="name">{name}</div>
        <div className="context">$NT{price}</div>
      </div>
      <div className="buyNow" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </div>
    </div>
  );
};
