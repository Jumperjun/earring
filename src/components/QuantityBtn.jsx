import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { shopContext } from "../contexts/shopContext";

const BuyNow = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;

  @media screen and (max-width: 320px) {
    font-size: 8px;
    width: 100%;
    margin-top: 45px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    font-size: 12px;
    width: 100%;
    margin-top: 25px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    font-size: 14px;
    width: 100%;
    margin-top: 40px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    font-size: 14px;
    width: 100%;
  }
  @media screen and (min-width: 950px) {
    font-size: 16px;
    width: 100%;
  }
`;

const BtnAll = styled.div`
  margin-top: 2px;
  padding-top: 10px;
`;

const BtnLeft = styled.span`
  margin-right: 15px;
  width: 30px;
  height: 30px;
`;
const BtnRight = styled.span`
  margin-left: 15px;
  width: 30px;
  height: 30px;
`;

export default function QuantityBtn(props) {
  const { item, product } = props;
  const { setButtonPop, onAdd, onRemove } = useContext(shopContext);

  return (
    <div>
      {item ? (
        <BtnAll>
          <BtnLeft>
            <button
              onClick={() => {
                onRemove(item);
                setButtonPop(true);
              }}
            >
              -
            </button>
          </BtnLeft>
          <span style={{ fontSize: "14px" }}>{item && item.qty}</span>
          <BtnRight>
            <button
              onClick={() => {
                onAdd(item);
                setButtonPop(true);
              }}
            >
              +
            </button>
          </BtnRight>
        </BtnAll>
      ) : (
        <BuyNow>
          <div onClick={() => onAdd(product)}>BUY NOW</div>
        </BuyNow>
      )}
    </div>
  );
}
