import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/router";
import { navbar } from "@/utils/data";

const SideNavigation = ({ showNav, setShowNav }) => {
  const { squada } = useAppContext();
  const { side_nav } = navbar;
  const [active, setActive] = useState(false);
  return (
    <motion.div
      key={showNav}
      exit={{ x: 500, opacity: 0 }}
      initial={{ x: 500, opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ x: 0, opacity: 1 }}
      className={` absolute top-0 right-0 h-screen w-screen z-10 bg-pri`}
    >
      <div className="w-full md:w-[50%] ml-auto bg-sec text-pri h-full border p-5">
        <div className="flex justify-end">
          <button
            onClick={() => setShowNav(false)}
            className=" bg-pri py-1 w-[100px]  rounded-[30px] text-sec justify-center flex "
          >
            Close
          </button>
        </div>
        <div className={`${squada.className} flex flex-col text-[50px]`}>
          {side_nav.map((item) => (
            <a href="#" className="" key={item.id}>
              <div className={`${active && "border-white"} inline-block`}>
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SideNavigation;
