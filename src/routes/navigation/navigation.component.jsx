import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.png";
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="container">
          <Link className="navigation-container" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-links" to="/shop">
                Shop
            </Link>
            <Link className="nav-links" to="/sign-in">
                Sign In
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
