import React from "react";
import Logo from "../../assets/weitersNcreators 2.png";
import YoutubeLogo from "../../assets/youtube_icon.png";
import FacebookLogo from "../../assets/facebook_icon.png";
import LinkdinLogo from "../../assets/linkdln.png";
import { footerContent } from "../../constants";

const Footer = () => {
  return (
    <div>
      <div className="footer h-[395px] my-0">
        <div className="footer-content-1">
          <div>
            <div>
              <img src={Logo} width={252} height={100} alt="logo" />
            </div>
            <div className="social-logo-container">
              {[YoutubeLogo, FacebookLogo, LinkdinLogo].map((each, idx) => {
                return (
                  <div className="p-4" key={idx}>
                    <img src={each} width={25} height={24} alt="logo" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content">
            {footerContent.map((each, idx) => {
              return (
                <div
                  className="each-content flex justify-start items-start"
                  key={idx}
                >
                  <span className="mr-5">
                    <img src={each.icon} width={16} height={16} alt="icon" />
                  </span>
                  <span className="text-contactUsBtnColor font-[14px] font-inter">
                    {each.header}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-border" />
        <div className="footer-content-2">
          <div className="content-header text-primaryFontColor text-[28px] font-inter">
            Links
          </div>
          <div className="content">
            {["Home", "About Us", "Portfolio", "Contact Us"].map(
              (each, idx) => {
                return (
                  <div
                    className="each-content text-contactUsBtnColor text-[14px] my-5 cursor-pointer"
                    key={idx}
                  >
                    {each}
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="footer-border" />
        <div className="footer-content-3">
          <div className="content-header text-primaryFontColor text-[28px] font-inter">
            Others
          </div>
          <div className="content">
            {[
              "Events & Exhibitions",
              "Branding & Advertising",
              "Print & Production",
              "Audio & Video",
              "Public Relations",
            ].map((each, idx) => {
              return (
                <div
                  className="each-content text-contactUsBtnColor text-[14px] mx-0 my-5 cursor-pointer"
                  key={idx}
                >
                  {each}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-border" />
      </div>
      <div className="footer-copyright h-[40px] bg-contactUsBtnColor text-white font-inter text-[14px]">
        Copyright@2023
      </div>
    </div>
  );
};

export default Footer;
