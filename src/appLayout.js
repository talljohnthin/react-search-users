import React from "react";
import Header from "./view/common/header/index";

/* Global Styles */
import "./styles/global.scss"

const AppLayout = ({ children }) => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="page-body">
          <Header />
          <div className="page-body-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
