import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbarStyle">
      <Link to="/" className="removeLine">
        <div className="title">Merricy</div>
      </Link>
      <Link to="/cart">
        <div className="icon2">
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </Link>
    </div>
  );
}
