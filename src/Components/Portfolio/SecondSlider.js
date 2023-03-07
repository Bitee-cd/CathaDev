import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/utils/data";

export const ImageSlider = () => {
  const { image_slider } = portfolio;
  const images = image_slider;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - slideWidth());
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setTranslateValue(-(slideWidth() * (images.length - 1)));
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + slideWidth());
    }
  };

  const slideWidth = () => {
    return document.querySelector(".slider__image").clientWidth;
  };

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === "next" ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction === "next" ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  console.log(translateValue);
  return (
    <div className="slider">
      <motion.div
        className="slider__wrapper"
        style={{ x: translateValue }}
        variants={{
          enter: {
            transition: { staggerChildren: 0.1, delayChildren: 0.5 },
          },
          exit: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 },
          },
        }}
        initial="enter"
        animate="center"
        exit="exit"
        custom={currentIndex > 0 ? "next" : "prev"}
      >
        {images.map((image, index) => (
          <motion.div
            className="slider__image"
            key={index}
            variants={slideVariants}
            custom={
              currentIndex === index
                ? "center"
                : currentIndex > index
                ? "prev"
                : "next"
            }
            transition={{ duration: 0.5 }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </motion.div>
      <button
        className="slider__button slider__button--prev "
        onClick={goToPrevSlide}
      >
        Previous
      </button>
      <button
        className="slider__button slider__button--next right-0"
        onClick={goToNextSlide}
      >
        Next
      </button>
      <style>
        {`
        .slider {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .slider__wrapper {
          display: flex;
          width: 100%;
        }

        .slider__image {
          
          min-width: 100%;
          height:400px;
        }

        .slider__button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: none;
          background-color: rgba(255, 255, 255, 0.7);
          color: #333;
          font-size: 24px;
          text-align: center;
          cursor: pointer
        }
        `}
      </style>
    </div>
  );
};
