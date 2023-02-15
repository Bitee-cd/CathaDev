import { services } from "@/utils/data";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAppContext } from "../Context/AppContext";

const Items = () => {
  const { items } = services;
  const { darkMode } = useAppContext();

  return (
    <div className="md:w-[60%] mx-auto grid md:grid-cols-2 gap-10">
      {items.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id % 2 === 0 && " relative"
          } border border-sec dark:border-pri p-2 lg:p-5`}
        >
          <div className="w-[50%]  mx-auto">
            <Image
              alt={item.title}
              src={darkMode ? item.image : item.image_dark}
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
          <h4 className="w-[60%] mx-auto text-center font-[700]">
            {item.title}
          </h4>
          <h6>{item.text}</h6>
        </div>
      ))}
    </div>
  );
};

export default Items;
