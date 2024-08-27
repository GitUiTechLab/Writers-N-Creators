import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/weitersNcreators 2.png";
import { NavbarContent } from "../../constants";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to manage the dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the dropdown visibility
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    // fixed top-0
    <div style={{ backgroundColor: "FFFEE8" }} className="navbar shadow-md w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} width={164} height={66} alt="Header Logo" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#453302]">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`navbar-links md:flex md:flex-row md:space-x-4 md:items-center ${isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
        >
          {NavbarContent.map((link, idx) => {
            return link.subItems ? (
              <div
                key={idx}
                className="relative p-2 text-[#453302] font-semibold text-[18px] md:flex md:items-center"
                onClick={() => toggleDropdown(idx)}
              >
                <div className="flex items-center cursor-pointer">
                  {link.item}
                  <FaChevronDown className="ml-2" />
                </div>
                {dropdownOpen === idx && (
                  <div className="dropdown absolute top-full left-0 bg-[#fef7ef] shadow-lg z-10 w-64 p-2 md:w-48">
                    {link.subItems.map((subLink, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subLink.link}
                        className="dropdown-item block text-[#453302] font-semibold text-[18px] p-2 hover:bg-gray-200 rounded"
                      >
                        {subLink.item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={link.link}
                className="navbar-link p-2 text-[#453302] font-semibold text-[18px] md:text-base"
              >
                {link.item}
              </Link>
            );
          })}
        </div>

        {/* Contact Us Button */}
        <Link to="/contact-us">
          <div className="hidden md:block">
            <button className="navbarButton">
              Contact Us
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
