import Image from "next/image";
import React from "react";
import Quotes from "../svg/Quotes";

const SingleTestimonial = ({ item }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[40%]">
        <Image
          alt="image"
          src="/images/testimonial/profile.png"
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
      <div className="w-[55%]">
        <div className="w-[5%] flex justify-start items-center">
          <div className="rotate-180">
            <Quotes />
          </div>
        </div>
        <p className="text-[12px] md:text-[16px] lg:text-[25px] mx-auto w-[80%] my-2">
          {item.text}
        </p>
        <div className="w-[5%] ml-auto">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
