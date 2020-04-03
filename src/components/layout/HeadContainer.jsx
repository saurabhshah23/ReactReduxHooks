import React from "react";
import "holderjs";

import { Navbar } from "react-bootstrap";

const HeadContainer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="holder.js/28x28"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Flight Search App
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default HeadContainer;
