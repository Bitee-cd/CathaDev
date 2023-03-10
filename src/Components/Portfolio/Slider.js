import Image from "next/image";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import { portfolio } from "@/utils/data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image_slider } = portfolio;
  const { darkMode } = useAppContext();
  const [direction, setDirection] = useState("");
  const directionRef = useRef(direction);
  const setPrev = () => {
    setDirection("prev");
    const newIndex =
      currentIndex === 0 ? image_slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const setNext = () => {
    setDirection("next");
    const newIndex =
      currentIndex === image_slider.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // Update the directionRef whenever the direction state changes
  if (directionRef.current !== direction) {
    directionRef.current = direction;
  }
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === "next" ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction === "next" ? -500 : 500,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setPrev()}
          className="w-[20px] flex items-center justify-center h-[20px] rounded-full bg-sec dark:bg-pri"
        >
          <AiOutlineArrowLeft className="text-pri dark:text-sec " size="70%" />
        </motion.div>
        <AnimatePresence initial={false} custom={currentIndex} mode="wait">
          {image_slider.map((image, index) => {
            const isCurrent = index === currentIndex;
            return (
              isCurrent && (
                <motion.div
                  key={index}
                  initial={{
                    x: directionRef.current !== "next" ? "-500px" : "500px",
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: directionRef.current !== "next" ? "500px" : "-500px",
                  }}
                  // transition={{ ease: "easeOut", duration: 0.5 }}
                  custom={direction}
                  transition={{ duration: 0.5, opacity: { duration: 0.3 } }}
                  className="w-[85%]"
                >
                  <Image
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
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setNext()}
          className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sec dark:bg-pri"
        >
          <AiOutlineArrowRight className="text-pri dark:text-sec" size="70%" />
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
