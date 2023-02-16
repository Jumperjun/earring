import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img
        src={process.env.PUBLIC_URL + "/productimg/" + image}
        alt="no-show"
        className="cartPho"
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <div className="description">
        <div className="desName">{name}</div>

        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            style={{ width: "10px", textAlign: "center" }}
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <div className="price">
          {cartItems[id]}X NT${price}
        </div>
      </div>
    </div>
  );
};
