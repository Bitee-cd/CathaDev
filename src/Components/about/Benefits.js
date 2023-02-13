import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import Image from "next/image";

const Benefits = ({ item }) => {
  const { squada } = useAppContext();
  return (
    <div className="border-b-[3px] border-sec dark:border-pri">
      <div className="flex justify-between items-center py-2 ">
        <h2 className={`${squada.className} `}>{item.text}</h2>
        <div className="-rotate-45">
          <AiOutlineArrowRight size="60" />
        </div>
      </div>
      <div className="md:hidden">
        <Image
          src={item.image}
          alt={item.text}
          placeholder="blur"
          blurDataURL="/images/hero-image.png"
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
  );
};

export default Benefits;
