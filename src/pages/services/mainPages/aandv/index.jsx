import React from "react";
import Contact from "../../../../components/services_contact/Contact";
import hero2 from "../../../../assets/testimonial_image.png";
import aud from "../../../../assets/au_v.jpg";
import play from "../../../../assets/icons/play_btn_icon.png";
import mic from "../../../../assets/mic.png";
import { useNavigate } from "react-router-dom";

const AandV = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section
        className="bg-cover bg-center h-[500px] flex flex-col items-center justify-end mx-10"
        style={{ backgroundImage: `url(${hero2})`, backgroundSize: "cover" }}
      >
        <h1 className="mb-4 text-4xl font-inter text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Events and Exhibitions
        </h1>
        <button className="mb-5 px-5 py-2.5 text-lg border-2 border-[#A67B05] bg-white text-[#A67B05] rounded-lg cursor-pointer">
          Know More
        </button>
      </section>

      <section className="m-20">
        <div className="flex flex-col text-left m-10 p-30">
          <h1
            className="font-inter text-gray-900 md:text-4xl lg:text-6xl"
            style={{ color: "#A67B05" }}
          >
            Radio jingles and radio programmes on Panchayati Raj for BGSYS,
            Panchayati Raj Department, Govt of Bihar
          </h1>
          <p className="text-gray-500 md:text-xl lg:text-xl mt-5">
            Our captivating radio jingles and informative programs promote the
            values and initiatives of Panchayati Raj, effectively reaching and
            engaging the community. Through creative audio content, we highlight
            the importance and achievements of local governance, ensuring
            widespread awareness and participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          <div
            className="relative cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/corporate-events")}
          >
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={mic}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Radio jingles for Directorate of Tourism, Gov of Bihar
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={mic}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Radio jingles for Directorate of Tourism, Gov of Bihar
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={play}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Radio jingles for Directorate of Tourism, Gov of Bihar
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} alt="Radio jingle image" className="w-full h-auto" />
            <img
              src={play}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Radio jingles for Directorate of Tourism, Gov of Bihar
            </p>
          </div>
        </div>
      </section>
      <section className="m-20">
        <div className="flex flex-col text-left m-10 p-30">
          <h1
            className="font-inter text-gray-500 md:text-3xl lg:text-6xl"
            style={{ color: "#453302" }}
          >
            Docu-drama on Panchayati Raj
          </h1>
          <p
            className="text-gray-500 md:text-xl lg:text-xl mt-5"
            style={{ color: "#453302" }}
          >
            Short Film for Bihar Rajya Beej Nigam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          <div
            className="relative cursor-pointer"
            style={{ backgroundColor: "#FFFEE8" }}
            onClick={() => handleNavigate("/corporate-events")}
          >
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={mic}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Short Film for BUIDCO
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={mic}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Radio jingles for Directorate of Tourism, Gov of Bihar
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} className="w-full h-auto" alt="Radio jingle image" />
            <img
              src={play}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Short Film on Amrut
            </p>
          </div>
          <div className="relative p-5" style={{ backgroundColor: "#FFFEE8" }}>
            <img src={aud} alt="Radio jingle image" className="w-full h-auto" />
            <img
              src={play}
              alt="Play button"
              className="absolute inset-0 w-16 h-16 m-auto"
            />
            <p className="text-center m-2 mb-4 text-2xl font-inter text-gray-400 md:text-5xl lg:text-2xl dark:text-[#A67B05]">
              Short film on Shravani Mela for Directorate of Tourism, Gov of
              Bihar
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default AandV;
