import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <div className="cartOut">
        <div className="cart">
          <h2 className="cartName">Shopping Basket</h2>

          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}

          {totalAmount > 0 ? (
            <div className="checkout">
              <div className="checkoutSub">Total: NT${totalAmount} </div>
              <div className="checkoutBttn">
                <div className="checkoutBttn1" onClick={() => navigate("/")}>
                  {" "}
                  Continue Shopping{" "}
                </div>
                <div
                  className="checkoutBttn2"
                  /*onClick={() => {
              checkout();
              navigate("/checkout");
            }}*/
                >
                  {" "}
                  Checkout{" "}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
