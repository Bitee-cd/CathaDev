import Image from "next/image";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import { portfolio } from "@/utils/data";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const { image_slider } = portfolio;
  const properties = {
    prevArrow: (
      <button className="w-[30px] h-[30px] flex items-center justify-center  rounded-full bg-sec dark:bg-pri">
        <AiOutlineArrowLeft className="text-pri dark:text-sec " size="70%" />
      </button>
    ),
    nextArrow: (
      <button className="w-[30px] flex items-center justify-center h-[30px] rounded-full bg-sec dark:bg-pri">
        <AiOutlineArrowRight className="text-pri dark:text-sec " size="70%" />
      </button>
    ),
  };
  return (
    <div className=" items-center justify-between">
      <Slide {...properties}>
        {image_slider.map((image, index) => (
          <Image
            key={index}
            alt="image"
            src={image.src}
            placeholder="blur"
            blurDataURL="/images/hero-image.png"
            priority
            width={700}
            height={475}
            sizes="100vw"
            className="w-full h-[400px] object-cover"
          />
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
