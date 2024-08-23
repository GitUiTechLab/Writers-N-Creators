import React from "react";
import Logo from "../../assets/weitersNcreators 2.png";
import { NavbarContent } from "../../constatnts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} width={164} height={66} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        {NavbarContent.map((link, idx) => {
          return (
            <Link
              key={idx}
              to={link.link}
              className="navbar-link p-2 text-[18px]"
            >
              {link.item}
            </Link>
          );
        })}
      </div>
      <div className="contact-us-btn">
        <button className="outline-none">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
