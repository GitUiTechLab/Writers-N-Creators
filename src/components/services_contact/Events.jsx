import React from "react";
import Contact from "./Contact";
const EventSection = ({ header, image }) => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-[600px] flex flex-col items-center justify-end mx-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="mb-4 text-4xl font-inter text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {header}
        </h1>
        <button className="mb-5 px-5 py-2.5 text-lg border-2 border-[#A67B05] bg-white text-[#A67B05] rounded-lg cursor-pointer">
          Know More
        </button>
      </section>
      <Contact />
    </div>
  );
};

export default EventSection;
