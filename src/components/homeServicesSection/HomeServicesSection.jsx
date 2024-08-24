import React from "react";
import { HomeServiceSectionContent } from "../../constants/index";

const HomeServicesSection = () => {
  return (
    <div className="home-services-section relative bg-cover bg-center bg-no-repeat bg-home_services_bg_image flex justify-center items-center flex-col h-[120vh] pt-12 pb-12">
      <div className="absolute inset-0 opacity-30"></div>{" "}
      {/* Optional overlay for better text contrast */}
      <div className="relative z-10 text-center p-6">
        <div className="section-header text-3xl font-bold text-black mb-4">
          Services
        </div>
        <div className="section-sub-header text-2xl font-semibold text-black mb-8">
          What We Offer
        </div>
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HomeServiceSectionContent.map((each, idx) => {
            return (
              <div
                className="each-card relative bg-white rounded-lg shadow-lg overflow-hidden"
                key={idx}
              >
                <img
                  src={each.image}
                  alt={each.header}
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white text-center text-contactUsBtnColor text-[18px] font-inter p-4 border-[1px] border-contactUsBtnColor rounded-[10px] w-[calc(100%-2rem)]">
                  {each.header}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServicesSection;
