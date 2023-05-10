import React from "react";
import styled from "styled-components";
import QuantityBtn from "./QuantityBtn";
import data from "../data.js";
import { useContext } from "react";
import { shopContext } from "../contexts/shopContext";

const ProductAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px) {
    margin-bottom: 150px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-bottom: 170px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: 950px) {
    margin-bottom: 200px;
  }
`;

const H11 = styled.div`
  margin-left: 8%;
  margin-top: 100px;
  margin-bottom: 30px;

  @media screen and (max-width: 320px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 10px;
    margin-left: 15px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 12px;
    margin-left: 15px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 14px;
    margin-left: 15px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 25px;
    font-size: 16px;
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    margin-left: 6%;
    margin-top: 50px;
    font-size: 16px;
  }
  @media screen and (min-width: 950px) {
    margin-left: 4%;
    margin-top: 50px;
  }
`;

const CardProduct = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 300px 300px 300px 300px;
  grid-gap: 160px 30px;

  @media screen and (max-width: 320px) {
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px;
    grid-gap: 130px 25px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    grid-template-columns: 120px 120px;
    grid-template-rows: 120px 120px 120px 120px 120px 120px 120px 120px;
    grid-gap: 130px 30px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    grid-template-columns: 120px 120px 120px;
    grid-template-rows: 120px 120px 120px 120px 120px 120px;
    grid-gap: 170px 45px;
    overflow: visible;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    grid-template-columns: 180px 180px 180px;
    grid-template-rows: 180px 180px 180px 180px 180px;
    grid-gap: 150px 45px;
    overflow: visible;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px 200px;
    grid-gap: 150px 30px;
    overflow: visible;
  }
  @media screen and (min-width: 950px) {
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px;
    grid-gap: 160px 25px;
  }
`;

const ProductImg = styled.img`
  @media screen and (max-width: 320px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 950px) {
    width: 200px;
    height: 200px;
  }
`;

const NamePrice = styled.div`
  font-size: 16px;
  height: 60px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 320px) {
    font-size: 8px;
    height: 50px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    font-size: 12px;
    height: 52px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    font-size: 14px;
    height: 65px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    font-size: 16px;
    height: 65px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    font-size: 16px;
    height: 65px;
  }
  @media screen and (min-width: 950px) {
    height: 65px;
  }
`;

const Context = styled.div`
  margin-top: 8px;
`;

export default function ProductList() {
  const { products } = data;
  const { cartItems } = useContext(shopContext);

  return (
    <div>
      <H11>
        <h1>Earrings</h1>
      </H11>
      <ProductAll>
        <CardProduct>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductImg
                  src={process.env.PUBLIC_URL + "/productimg/" + product.image}
                  alt="no-show"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
                <NamePrice>
                  <div>{product.name}</div>
                  <Context>
                    <div>NT$ {product.price}</div>
                  </Context>
                </NamePrice>
                <QuantityBtn
                  item={cartItems.find((x) => x.id === product.id)}
                  product={product}
                />
              </div>
            );
          })}
        </CardProduct>
      </ProductAll>
    </div>
  );
}
