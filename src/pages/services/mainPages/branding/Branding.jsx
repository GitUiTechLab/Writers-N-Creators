import React from "react";
import card from "../../../../assets/crtcard.png";
import banner from "../../../../assets/brandingCard.png";
import Contact from "../../../../components/services_contact/Contact";

const Branding = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter text-white text-center mt-10 px-2">
          Branding And Advertising
        </h1>
        <button className="mt-5 px-4 py-2 text-base sm:text-lg border-2 border-[#A67B05] bg-white text-[#A67B05] rounded-lg cursor-pointer">
          Know More
        </button>
      </section>

      {/* Description Section */}
      <section className="m-4 sm:m-6 md:m-8 lg:m-10 px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter text-[#A67B05]">
          About Branding and Advertising, Concept Designing for Print and
          Outdoors
        </h1>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-5 md:mt-6 lg:mt-8">
          At Writers N Creators, we excel in crafting unique and compelling
          concepts for print and outdoor advertising. Our experienced team of
          designers and strategists work collaboratively to understand your
          brand's identity and goals. We take pride in creating visually
          stunning and effective advertisements that capture attention and
          convey your message with clarity and creativity. From initial
          brainstorming sessions to final execution, we ensure every aspect of
          the design process is meticulously planned and executed, delivering
          results that not only meet but exceed your expectations.
        </p>

        <h2 className="text-[#A67B05] font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8 mb-4">
          Services
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-5 md:mt-6">
          At Writers N Creators, we excel in crafting unique and compelling
          concepts for print and outdoor advertising. Our experienced team of
          designers and strategists work collaboratively to understand your
          brand's identity and goals.
        </p>
      </section>

      {/* Cards Section */}
      <section className="m-4 sm:m-6 md:m-8 lg:m-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[...Array(6).keys()].map((index) => (
            <div
              key={index}
              className="relative bg-[#FFFEE8] p-4 sm:p-5 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#F8F8F8] cursor-pointer rounded-lg"
            >
              <img
                src={card}
                className="w-full h-auto rounded-lg"
                alt={`Card ${index + 1}`}
              />
              <p className="text-center mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-gray-400 dark:text-[#A67B05]">
                Random Heading {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Branding;
