import React from "react";
import Blogo from "../assets/Blogo.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-white lg:px-24 md:px-16 mt-20 md:mt-28  py-6 justify-between  items-center">
        <div className="md:w-[55%] w-[85%] gap-3 font-custom flex flex-col lg:gap-9 md:gap-4 ">
          <h1 className="lg:text-[60px] text-[30px] leading-[41px] md:text-[45px] lg:leading-[71px] md:leading-[56px]   text-[#152330] ">
            Building the <b>Future </b>
            on the <b>CodeVertix</b>
          </h1>
          <p className="lg:text-[14px] md:text-[12px] leading-[30px] text-[#949494]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here', making it look like readable English.
          </p>
          <button  className="lg:w-[164px] w-[132px] lg:h-[49px] md:w-[135px] h-[40px] md:h-[45px] btn hover:shadow-lg text-[12px] lg:text-[16px] leading-4 ">
            Let’s get started!
          </button>
        </div>
        <div className="relative" >
          <img className="floating-image"  src={Blogo} alt='mypic' />
        </div>
      </div>

      
    </>
  );
};

export default Banner;
