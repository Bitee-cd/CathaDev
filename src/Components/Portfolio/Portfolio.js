import Image from "next/image";
import React from "react";
import image from "../../../public/images/about_main.png";

const Portfolio = () => {
  return (
    <section className="screen-center my-10 lg:my-20">
      <h4 className="my-5 font-[700] uppercase">Portfolio</h4>
      <div className="grid grid-cols-3 gap-5 lg:gap-10">
        <div>
          <Image
            alt="image"
            src={image}
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
        <div>
          <Image
            alt="image"
            src={image}
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
        <div>
          <Image
            alt="image"
            src={image}
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
      </div>
    </section>
  );
};

export default Portfolio;
