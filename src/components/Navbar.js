import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* logo */}
      <div className="logo">
        <Link to="/">
          <img src="./images/LWSBlog.svg" alt="search" />
        </Link>
      </div>
      {/* auth buttons , This will nonfunctional, just for nice looking */}
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
