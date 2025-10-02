import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Routers</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
          <li>
          <Link to="/User">User-Profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
