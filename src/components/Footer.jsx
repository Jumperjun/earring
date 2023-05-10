import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterCss = styled.div`
  margin-top: 230px;
  background-color: #bebebe;
  width: 100%;
  height: 50px;
  color: white;
  position: relative;
`;

const P2022 = styled.div`
  position: absolute;
  font-size: 14px;
  right: 110px;
  bottom: 2px;

  @media screen and (max-width: 320px) {
    position: absolute;
    font-size: 12px;
    right: 120px;
    bottom: 2px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    position: absolute;
    font-size: 12px;
    right: 170px;
    bottom: 2px;
  }
`;
const IconAll = styled.div`
  position: absolute;
  right: 260px;
  bottom: 8px;

  @media screen and (max-width: 320px) {
    position: absolute;
    right: 20px;
    bottom: 8px;
    display: flex;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    position: absolute;
    right: 40px;
    bottom: 8px;
    display: flex;
  }
`;

const Icon = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 24px;

  @media screen and (max-width: 320px) {
    margin-left: 6px;
    margin-right: 6px;
    cursor: pointer;
    font-size: 20px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-left: 6px;
    margin-right: 6px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export default function Footer() {
  return (
    <div>
      <FooterCss>
        <P2022>
          <p>@2022 Merricy . Inc</p>
        </P2022>
        <IconAll>
          <Icon>
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faSquareInstagram} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faSquareTwitter} />
          </Icon>
        </IconAll>
      </FooterCss>
    </div>
  );
}
