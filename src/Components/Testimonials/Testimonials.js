import React, { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";
import { AnimatePresence, motion } from "framer-motion";
import { testimonial } from "@/utils/data";
import { Element } from "react-scroll";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonials = () => {
  const [currentValue, setCurrentValue] = useState(1);
  const { items } = testimonial;

  useEffect(() => {
    setTimeout(function () {
      setCurrentValue((currentValue % 3) + 1);
    }, 10000);
  });
  return (
    <Element name="testimonials" className="element" id="section-7">
      <section
        className="screen-center my-10 lg:my-20 overflow-x-hidden"
        id="testimonials"
      >
        <h4 className="my-5 font-[700] uppercase">Testimonials</h4>
        <Slide arrows={false}>
          {items.map((item, index) => (
            <SingleTestimonial key={index} item={item} />
          ))}
        </Slide>
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
