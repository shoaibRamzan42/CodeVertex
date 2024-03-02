import React from "react";
import Icon from "../assets/AIicon.png";

const SCard = () => {
  return (
    <>
      
      <div className="lg:w-[31%] xl:w-[38%] 2xl:w-[360px] w-full md:w-[48%] animate hover:scale-105 rounded-lg flex flex-col items-center justify-center lg:py-16 py-8 md:py-12  bg-[#F5F4F4]">
        <div className="w-[80%] flex flex-col gap-3  ">
          <div className="w-[54px] h-[54px] flex justify-center items-center border-[0.93px] border-slate-600 bg-white rounded-full">
            <img src={Icon} alt="logo" />
          </div>
          <h1 className="text-[#152330] text-[18px] leading-[25px] font-custom font-semibold ">
            AI/ML/Chat Gpt
          </h1>
          <p className="text-[#949494] text-[16px] leading-[25px] ">
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </p>
          <button className=" w-[79px] h-[29px] hover:shadow-lg btn text-[8px] ">Learn More</button>
        </div>
      </div>
      
    </>
  );
};
export default SCard;
