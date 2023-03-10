import Image from "next/image";
import React from "react";
import Quotes from "../svg/Quotes";

const SingleTestimonial = ({ item }) => {
  return (
    <div className="flex justify-between">
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
        <div className=" flex justify-start">
          <div className="rotate-180">
            <Quotes />
          </div>
        </div>
        <p className="mx-auto w-[80%] my-2">{item.text}</p>
        <div className="flex justify-end">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
