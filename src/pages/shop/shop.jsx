import React from "react";
import { PRODUCTS } from "../../data";
import { Product } from "./product";
import homePho from "../../assets/hopi.jpg";
import "../../App.css";

export const Shop = () => {
  return (
    <div className="all">
      <img src={homePho} alt="no-pho" className="homePho" />

      <h1 className="h11">Earrings</h1>
      <div className="productAll">
        <div className="cardProduct">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
