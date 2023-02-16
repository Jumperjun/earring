import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

export default function Footer() {
  return (
    <div>
      <div className="footerCss">
        <div className="p2022">
          <p>@2022 Merricy . Inc</p>
        </div>
        <div className="iconAll">
          <div className="icon">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSquareTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
