import Image from "next/image";
import React from "react";
import { portfolio } from "@/utils/data";
import Slider from "./Slider";
import BackGroundLines from "../Reusable/BackGroundLines";
import { Element } from "react-scroll";

const Portfolio = () => {
  const { image_slider } = portfolio;
  return (
    <Element name="services" className="element">
      <div className="relative" id="portfolio">
        <BackGroundLines top="bottom-0" position="right-1/4" />
        <section className="screen-center my-10 lg:my-20 zindex2">
          <h4 className="my-5 font-[700] uppercase">Portfolio</h4>
          <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-10">
            {image_slider.map((image) => (
              <div key={image.id} className="h-[500px] 2xl:h-auto">
                <Image
                  alt="image"
                  src={image.src}
                  placeholder="blur"
                  blurDataURL="/images/hero-image.png"
                  priority
                  width={700}
                  height={475}
                  className="object-cover h-full w-full"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <Slider />
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Portfolio;
