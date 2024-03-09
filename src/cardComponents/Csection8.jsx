import React from "react";
import image from "../assets/profile5.jpg";
import insta from "../assets/Instagram - png.png";
import facebook from "../assets/Facebook - jpeg 0.png";
import whatsapp from "../assets/WhatsApp - png 0.png";
import Upcity from "../assets/UpCity - png.svg";
import topFrim from "../assets/Top Firms - jpeg 0.png";
import tecR from "../assets/TechReviewer - png 0.png";
import { motion } from "framer-motion";

const Csection8 = () => {
  return (
    <>
      <div
        id="aboutUs"
        className="flex lg:flex-row lg:justify-between  flex-col items-center justify-center gap-[5rem] lg:gap-0 "
      >
       
          {" "}
          <div className="lg:w-[225%]  md:w-[460px] w-[275px] ">
            <h1 className="font-custom font-semibold text-[#152330] text-[30px] md:text-[33px]  team ">
              Talk To Our Sales Team
            </h1>
            <div className="flex pt-5 gap-4 items-center">
              <img className="max-w-[20%] rounded-full" src={image} />
              <div>
                <h1 className="md:text-[24px] text-[20px] text-[#2DA3A2] leading-[27px] font-custom font-bold ">
                 Muhammad Arshad 
                </h1>
                <h2 className="text-[#949494] text-[16px] leading-[24px] ">
                  Head of Sales
                </h2>
                {/* <div className="flex gap-5 pt-3">
                  <img src={insta} />
                  <img src={facebook} />
                  <img src={whatsapp} />
                </div> */}
              </div>
            </div>
            <h1 className="font-custom font-bold pt-5 text-[#152330] text-[20px] md:text-[24px] leading[27px] ">
              Awards
            </h1>
            <div className="pt-5 flex md:flex-nowrap flex-wrap gap-10">
              <img src={Upcity} />
              <img src={topFrim} />
              <img src={tecR} />
            </div>
          </div>
      
        <div className="lg:w-[150%] lg:shadow-none shadow-lg p-3 lg:p-0 w-[275px] md:w-[400px]">
            
          <h1 className="text-[#152330] text-[12px] md:text-[16px] leading-[22px] md:leading-[26px] font-custom font-medium ">
            We are passionate about delivering great software and services.
          </h1>
          <input
            className="bg-[#F5F4F4] rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4  "
            type="text"
            placeholder="Your Name*"
          />
          <input
            className="bg-[#F5F4F4]  rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4  "
            type="text"
            placeholder="Your Name*"
          />

          <textarea
            className="bg-[#F5F4F4]  rounded-[4px] text-[#949494] text-[12px] md:text-[16px] py-5 px-5 font-custom leading-[20px] w-full mt-4"
            placeholder="Your Massage*"
            name="postContent"
            rows={4}
            cols={40}
          />
          <button className="btn h-[54px] hover:shadow-lg mt-4">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Csection8;
