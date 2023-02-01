import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

const SideNavigation = ({ showNav, setShowNav }) => {
  return (
    <motion.div
      key={showNav}
      exit={{ x: 500, opacity: 0 }}
      initial={{ x: 500, opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ x: 0, opacity: 1 }}
      className={`absolute right-0 h-screen w-screen zindex2 bg-pri`}
    >
      <div className="w-[50%] ml-auto bg-sec text-pri h-full border p-5">
        <div className="flex justify-between ">
          <div
            className="flex gap-3 items-center"
            onClick={() => setShowNav(false)}
          >
            <HiArrowLeft color="#00000" />
            Home
          </div>
          <button
            onClick={() => setShowNav(false)}
            className=" bg-pri py-1 w-[100px]  rounded-[30px] text-sec justify-center flex "
          >
            Close
          </button>
        </div>
        <div className="flex flex-col text-[50px]">
          <a href="#" className="">
            <div className="border-b-[2px] border-white inline-block">Home</div>
          </a>
          <a href="#" className="">
            <div className="hover:border-b-[2px] border-white inline-block">
              About Us
            </div>
          </a>
          <a href="#" className="">
            <div className="hover:border-b-[2px] border-white inline-block">
              Services
            </div>
          </a>
          <a href="#" className="">
            <div className="hover:border-b-[2px] border-white inline-block">
              Portfolio
            </div>
          </a>
          <a href="#" className="">
            <div className="hover:border-b-[2px] border-white inline-block">
              Testimonials
            </div>
          </a>
          <a href="#" className="">
            <div className="hover:border-b-[2px] border-white inline-block">
              Contact Us
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SideNavigation;
