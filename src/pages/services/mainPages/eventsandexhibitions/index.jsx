import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../../index.css";
import headerImg from "../../../../assets/Events.png";
import writers from "../../../../assets/writers.png";
import food from "../../../../assets/foodandfest.png";
import corporate from "../../../../assets/corporate_events.png";
import offsite from "../../../../assets/offsite.png";
import department from "../../../../assets/department.png";
import pe1 from "../../../../assets/pe1.png";
import pe2 from "../../../../assets/pe2.png";
import pe3 from "../../../../assets/pe3.png";

import Contact from "../../../../components/services_contact/Contact";
const Events = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-[1200px]">
      <section
        className="bg-cover bg-center h-[500px] flex flex-col items-center justify-end mx-10"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <h1 className="mb-4 text-4xl font-inter text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Events and Exhibitions
        </h1>
        <button className="mt-5 px-5 py-2.5 text-lg border-2 border-[#A67B05] bg-white text-[#A67B05] rounded-lg cursor-pointer">
          Know More
        </button>
      </section>

      <section>
        <div className="mx-20 my-10 py-10">
          <h1
            className="my-10 font-inter text-gray-900 md:text-5xl lg:text-6xl"
            style={{ color: "#A67B05" }}
          >
            Overview Events and Exhibitions
          </h1>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          className="mx-20 flex flex-col justify-center items-center my-10 p-6 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleNavigate("/writersandcreaters")}
          style={{
            borderRadius: 5,
            backgroundColor: "#FFFEE8",
          }}
        >
          <img src={writers} alt="writers" className="max-w-full h-auto" />
          <h1 className="my-10 font-inter text-gray-800 md:text-4xl lg:text-5xl">
            Writer n Creators Home Creation
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20 my-10">
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/corporate-events")}
          >
            <img
              src={corporate}
              alt="Corporate Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Corporate Events
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/government-department-events")}
          >
            <img
              src={offsite}
              alt="Government Department Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Government Department Events
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/offsite-leisure-tours")}
          >
            <img
              src={department}
              alt="Offsite and Leisure Tours"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Offsite and Leisure Tours
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/food-and-cultural-fests")}
          >
            <img
              src={food}
              alt="Food and Cultural Fests"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Food and Cultural Fests
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
          <p className="text-lg mb-8">
            Bihar Poultry & Aqua Expo 2024-12-13-14 September 2024, Gyan Bhawan,
            Patna
          </p>
        </div>
        <div
          className="w-3/4 mx-auto bg-[#FFF8E1] text-[#A67B05] font-bold text-2xl py-8 px-12 rounded-lg border-2 border-[#A67B05] cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleNavigate("/bihar-poultry-aqua-expo")}
        >
          <h1 className="text-center">
            Bihar Poultry and Aqua Expo 2024 - 12-13-14 September 2024, Gyan
            Bhawan, Patna
          </h1>
        </div>
      </section>

      <section className="w-full my-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Past Events</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/past-event-1")}
          >
            <img
              src={pe1}
              alt="Past Event 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Past Event 1
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/past-event-2")}
          >
            <img
              src={pe2}
              alt="Past Event 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Past Event 2
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/past-event-3")}
          >
            <img
              src={pe3}
              alt="Past Event 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Past Event 3
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Events;
