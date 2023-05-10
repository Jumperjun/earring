import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { shopContext } from "../contexts/shopContext";

const NavbarStyle = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 90px;

  @media screen and (max-width: 320px) {
    height: 60px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    height: 60px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    height: 60px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    height: 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    height: 70px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 320px) {
    margin-top: 12px;
    font-size: 28px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-top: 12px;
    font-size: 28px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-top: 14px;
    font-size: 28px;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    margin-top: 16px;
    font-size: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    margin-top: 16px;
    font-size: 32px;
  }
`;
const Icon2 = styled.div`
  position: fixed;
  right: 5%;
  top: 45px;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    right: 10%;
    top: 3.5%;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    right: 10%;
    top: 3.5%;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    right: 10%;
    top: 3%;
  }
  @media screen and (min-width: 650px) and (max-width: 768px) {
    right: 10%;
    top: 3.5%;
  }
  @media screen and (min-width: 768px) and (max-width: 950px) {
    right: 10%;
    top: 3.5%;
  }
`;

export default function Navbar() {
  const { setButtonPop } = useContext(shopContext);

  return (
    <NavbarStyle>
      <Title>Merricy</Title>
      <Icon2>
        <FontAwesomeIcon
          icon={faBagShopping}
          onClick={() => setButtonPop(true)}
        />
      </Icon2>
    </NavbarStyle>
  );
}
