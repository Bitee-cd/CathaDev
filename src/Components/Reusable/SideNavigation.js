import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/router";

const SideNavigation = ({ showNav, setShowNav }) => {
  const { squada } = useAppContext();
  const { route } = useRouter();
  return (
    <motion.div
      key={showNav}
      exit={{ x: 500, opacity: 0 }}
      initial={{ x: 500, opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ x: 0, opacity: 1 }}
      className={` absolute right-0 h-screen w-screen z-10 bg-pri`}
    >
      <div className="w-[70%] md:w-[50%] ml-auto bg-sec text-pri h-full border p-5">
        <div className="flex justify-end">
          <button
            onClick={() => setShowNav(false)}
            className=" bg-pri py-1 w-[100px]  rounded-[30px] text-sec justify-center flex "
          >
            Close
          </button>
        </div>
        <div className={`${squada.className} flex flex-col text-[50px]`}>
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
