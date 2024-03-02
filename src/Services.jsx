import React from "react";
import SCard from "../src/cardComponents/sCards";
import {motion} from "framer-motion"
const Services = () => {
  return (
    <>
      <div id="services" className="bg-white flex flex-col lg:px-24 px-6 md:px-16 py-8  md:py-12 justify-center items-center lg:gap-24 gap-8  ">
        <h1 className=" font-custom lg:text-[64px] leading-[45px]  text-[40px] md:text-[60px] text-[#1A202C] md:leading-[50px] lg:leading-[54px]">
          Our
          <span className="font-extrabold ml-3  text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
            Services
          </span>
        </h1>
        <motion.div
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                // viewport={{ once: true }}
                className=''
            >
       <div className="flex flex-wrap justify-center items-center gap-5 ">
      
 
          <SCard />
          <SCard />
          <SCard />  
          <SCard />
          <SCard />
        </div>
        </motion.div>
      </div>

    </>
  );
};

export default Services;
