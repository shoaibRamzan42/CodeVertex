import React from "react";
import Card7 from "./cardComponents/Card7";
import { motion } from "framer-motion";
const Section7 = () => {
  return (
    <>
      <div
        id="work"
        className=" md:py-16 py-8 lg:py-24 flex flex-col gap-5 justify-center items-center px-8 md:px-16  lg:px-24 bg-[#F5F4F4]"
      >
        <h1 className=" font-custom text-center text-[30px] md:text-[57px] lg:text-[64px] text-[#1A202C] leading-[40px] md:leading-[70px] lg:leading-[67px]">
          How
          <br />
          <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
            Development Process Works
          </span>
        </h1>
        <div className="  flex flex-wrap justify-center items-center gap-9">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
            <Card7 />
          </motion.div>

          <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
            {" "}
            <Card7 />
          </motion.div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
            <Card7 />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section7;
