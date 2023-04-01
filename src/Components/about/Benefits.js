import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Benefits = ({ item, setImage }) => {
  const { squada } = useAppContext();
  const [hover, setHover] = useState(false); // separate state for each component

  return (
    <motion.div className={` ${""} relative`}>
      <div
        onMouseEnter={() => setImage(item.id)}
        className="flex justify-between items-center"
      >
        <h2
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`${squada.className} `}
        >
          {item.text}
        </h2>
        <div className="-rotate-45">
          <div className="hidden md:block">
            <AiOutlineArrowRight size="60" />
          </div>
          <div className="md:hidden block">
            <AiOutlineArrowRight size="30" />
          </div>
        </div>
        <AnimatePresence mode="wait">
          {!hover && (
            <motion.div
              key={hover}
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="absolute bottom-0 w-full h-[3px] bg-sec dark:bg-pri"
            ></motion.div>
          )}
          {hover && (
            <motion.div
              key={hover}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 3 }}
              style={{ originX: "center" }}
              className="absolute bottom-0 w-full h-[3px] bg-sec dark:bg-pri "
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="md:hidden">
        <Image
          src={item.image}
          alt={item.text}
          placeholder="blur"
          blurDataURL="/images/hero-image.png"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Benefits;
