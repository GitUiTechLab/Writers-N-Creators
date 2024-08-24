import React from "react";
import img1 from "../../assets/bg_image1.png";
import img2 from "../../assets/bg_image2.png";
const Contact = () => {
  return (
    <section className="relative flex flex-col space-y-2">
      <img
        src={img1}
        alt="img1"
        className="self-end -mb-20 z-10" // Position the image above the box and overlap it
      />
      <div
        className="relative text-center p-20 z-0"
        style={{ backgroundColor: "#FFFEE8" }}
      >
        <h1
          className="font-inter text-gray-900 md:text-5xl lg:text-6xl"
          style={{ color: "#453302" }}
        >
          Get in Touch for Your Print & Production Needs
        </h1>
        <p className="mt-6 text-center text-black">
          At Writers N Creators, we're dedicated to delivering exceptional print
          and production services tailored to your unique requirements. Whether
          you need brochures, leaflets, magazines, or any other printed
          materials, our team is here to bring your vision to life with
          creativity and precision.
        </p>
        <button className="mt-10 px-5 py-2.5 text-lg border-2 border-[#A67B05] bg-white text-[#A67B05] rounded-lg cursor-pointer">
          Know More
        </button>
      </div>
      <img
        src={img2}
        alt="img2"
        className="self-start -mt-20 z-10" // Position the image above the box and overlap it
      />
    </section>
  );
};

export default Contact;
