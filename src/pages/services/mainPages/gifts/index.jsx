import React from "react";
import Contact from "../../../../components/services_contact/Contact";
import banner from "../../../../assets/giftbanner.png";
import p1 from "../../../../assets/giftc1.png";
import p2 from "../../../../assets/giftc2.png";
import { useNavigate } from "react-router-dom";

const Gifts = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section
        className="bg-cover bg-center h-[500px] flex flex-col items-center justify-end mx-10"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      >
        <h1 className="mb-10 text-4xl font-inter text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Gifts and Misc
        </h1>
      </section>
      <section className="m-20">
        <div className="flex flex-col text-left m-10 p-30">
          <h1
            className="font-inter text-gray-500 md:text-3xl lg:text-6xl"
            style={{ color: "#453302" }}
          >
            OverView
          </h1>
          <p
            className="text-gray-500 md:text-xl lg:text-xl mt-5"
            style={{ color: "#453302" }}
          >
            At Writers N Creators, we understand the significance of corporate
            gifting in building and nurturing business relationships. Our
            curated range of corporate gifts is designed to leave a lasting
            impression, offering a blend of elegance, utility, and
            personalization. From bespoke gifts to branded merchandise, we cater
            to diverse corporate needs with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          <div
            className="relative cursor-pointer p-5 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#F8F8F8]"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/corporate-events")}
          >
            <img src={p2} className="w-full h-auto" alt="Corporate Gifts" />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Corporate Gifts
            </p>
          </div>
          <div
            className="relative p-5 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#F8F8F8]"
            style={{ backgroundColor: "#FFFEE8" }}
          >
            <img src={p1} className="w-full h-auto" alt="Calendar and Diary" />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Calendar and Diary
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Gifts;
