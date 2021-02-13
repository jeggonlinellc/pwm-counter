import React, { Component, createFactory } from "react";

//Stateless Functional Components
//Object Destructuting - adding curly braces to the arguement () and removing "props"
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
