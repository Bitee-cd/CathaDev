import Image from "next/image";
import React, { useState } from "react";
import image from "../../../public/images/about_main.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import { portfolio } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";

const Slider = () => {
  const [active, setActive] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const { darkMode } = useAppContext();
  const { image_slider } = portfolio;

  const setPrev = () => {
    active == 1 ? setActive(3) : setActive(active - 1);
  };
  const setNext = () => {
    active == 3 ? setActive(1) : setActive(active + 1);
  };
  console.log(image_slider[active]);
  return (
    <>
      <div className="flex items-center justify-between">
        <div
          onClick={() => setPrev()}
          className="w-[20px] flex items-center justify-center h-[20px] rounded-full bg-sec dark:bg-pri"
        >
          <AiOutlineArrowLeft color={`${darkMode ? "#0C0C0C" : "E3E3E3"}`} />
        </div>

        <AnimatePresence>
          {image_slider.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className={`${active == image.id ? "block" : "hidden"} w-[80%]`}
            >
              <Image
                alt="image"
                src="/images/portfolio/slider.png"
                placeholder="blur"
                blurDataURL="/images/hero-image.png"
                priority
                width={700}
                height={475}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <div
          onClick={() => setNext()}
          className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sec dark:bg-pri"
        >
          <AiOutlineArrowRight color={`${darkMode ? "#0C0C0C" : "E3E3E3"}`} />
        </div>
      </div>
    </>
  );
};

export default Slider;
