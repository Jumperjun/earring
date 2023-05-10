import React from "react";
import "../App.css";
import styled from "styled-components";
import { useContext } from "react";
import { shopContext } from "../contexts/shopContext";

const PopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 98, 98, 0.2);
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

const PopInner = styled.div`
  position: absolute;
  right: 0;
  width: 40%;
  height: 100%vh;
  background-color: #fff;

  @media screen and (max-width: 320px) {
    width: 80%;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 80%;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    width: 60%;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    width: 50%;
    padding-bottom: 1rem;
  }
`;

const PopupH3 = styled.h3`
  position: absolute;
  left: 15px;
  font-size: 1.4rem;
`;

const CartDetail = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  @media screen and (max-width: 320px) {
    margin-left: 0.3rem;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-left: 2rem;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-left: 2.5rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const BtnAll = styled.div`
  margin-right: 1rem;
  @media screen and (max-width: 320px) {
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-right: 0.8rem;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-right: 1.2rem;
  }
`;

const BtnLeft = styled.span`
  margin-right: 15px;
`;
const BtnRight = styled.span`
  margin-left: 15px;
`;

const TotalAmount = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: #5f9ea0;
  font-size: 1.1rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

const CheckBtn = styled.button`
  border-radius: 30px;
  padding: 10px 50px 10px 15px;
  margin-left: 37rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    margin-left: 11rem;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-left: 11rem;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-left: 13rem;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-left: 15rem;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    margin-left: 19rem;
  }
  @media screen and (min-width: 950px) {
    margin-left: 19rem;
  }
`;

export default function Popup(props) {
  const { cartItems, buttonPop, setButtonPop, onAdd, onRemove } =
    useContext(shopContext);

  return (
    <div>
      {buttonPop ? (
        <PopWrapper>
          <PopInner>
            <CloseBtn onClick={() => setButtonPop(false)}>X</CloseBtn>
            <PopupH3>My Cart</PopupH3>
            <CartDetail>
              {cartItems.map((item) => {
                return (
                  <div key={item.id}>
                    <br />
                    <div>{item.name}</div>

                    <ItemWrapper>
                      <BtnAll>
                        <BtnLeft>
                          <button
                            style={{ width: "20px", height: "20px" }}
                            onClick={() => {
                              onRemove(item);
                              setButtonPop(true);
                            }}
                          >
                            -
                          </button>
                        </BtnLeft>
                        <span style={{ fontSize: "14px" }}>{item.qty}</span>
                        <BtnRight>
                          <button
                            style={{ width: "20px", height: "20px" }}
                            onClick={() => onAdd(item)}
                          >
                            +
                          </button>
                        </BtnRight>
                      </BtnAll>
                      <span>
                        {`NT$ ${item.price} X ${item.qty} = ${
                          item.price * item.qty
                        }`}
                      </span>
                    </ItemWrapper>
                    <hr />
                  </div>
                );
              })}
            </CartDetail>
            <TotalAmount>
              Total Amount: NT${" "}
              {cartItems.reduce(
                (total, item) => total + item.price * item.qty,
                0
              )}
            </TotalAmount>
            <CheckBtn>check</CheckBtn>
          </PopInner>
        </PopWrapper>
      ) : (
        ""
      )}
    </div>
  );
}
