import React, { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";
import { AnimatePresence, motion } from "framer-motion";
import { testimonial } from "@/utils/data";
import { Element } from "react-scroll";

const Testimonials = () => {
  const [currentValue, setCurrentValue] = useState(1);
  const { items } = testimonial;
  useEffect(() => {
    setTimeout(function () {
      setCurrentValue((currentValue % 3) + 1);
    }, 10000);
  });
  return (
    <Element name="testimonials" className="element">
      <section
        className="screen-center my-10 lg:my-20 overflow-x-hidden"
        id="testimonials"
      >
        <h4 className="my-5 font-[700] uppercase">Testimonials</h4>
        <AnimatePresence mode="wait">
          {items.map((item, index) => {
            const isCurrent = currentValue - 1 === index;
            return (
              isCurrent && (
                <motion.div
                  key={index}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <SingleTestimonial item={item} />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
        <div className="flex gap-5 justify-center items-center mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                index + 1 === currentValue ? "bg-black" : "bg-sec opacity-60"
              } h-[12px] w-[12px] rounded-full duration-1000`}
            ></div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Testimonials;
