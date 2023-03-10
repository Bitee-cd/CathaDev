import { services } from "@/utils/data";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import BackGroundLines from "../Reusable/BackGroundLines";

const Items = () => {
  const { items } = services;
  const { darkMode, sora } = useAppContext();

  return (
    <>
      <BackGroundLines position="left-[15%]" top="top-[25%] translate-y-1/2" />
      <div
        className={`${sora.className} screen-center   md:grid-rows-8 mx-auto grid md:grid-cols-2 gap-10`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id % 2 !== 0
                ? "md:ml-auto"
                : item.id === 2
                ? "md:row-start-2 md:col-start-2"
                : ""
            }  border border-sec md:w-[300px]  row-span-2 duration-300 hover:bg-[#fff] hover:text-sec dark:border-pri dark:hover:border-sec hover:border-pri p-5`}
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
            <h4 className="w-[80%] mt-2 mx-auto text-center font-[700]">
              {item.title}
            </h4>
            <h6 className="font-normal">{item.text}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
