import Image from "next/image";
import React from "react";
import { portfolio } from "@/utils/data";
import Slider from "./Slider";
import BackGroundLines from "../Reusable/BackGroundLines";
import Quotes from "../svg/Quotes";
import { ImageSlider } from "./SecondSlider";

const Portfolio = () => {
  const { image_slider } = portfolio;
  return (
    <div className="relative">
      <BackGroundLines top="bottom-0" position="right-1/4" />
      <section className="screen-center my-10 lg:my-20 zindex2">
        <h4 className="my-5 font-[700] uppercase">Portfolio</h4>
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-10">
          {image_slider.map((image) => (
            <div key={image.id}>
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
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Slider />
        </div>
        <ImageSlider />
      </section>
    </div>
  );
};

export default Portfolio;
