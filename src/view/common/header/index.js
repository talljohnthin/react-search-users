import React from "react";
import { Menu } from "react-feather"
import "./header.scss";

function header() {
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__container__logo">Team</div>
            <div className="header__container__hamburger"><Menu /></div>
        </div>
    </div>
  );
}

export default header;
