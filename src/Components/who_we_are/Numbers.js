import { about } from "@/utils/data";
import React from "react";
import CountUp from "react-countup";
import { useAppContext } from "../Context/AppContext";

const Numbers = () => {
  const { who_we_are } = about;
  const { squada } = useAppContext();
  return (
    <div className=" my-10 grid grid-cols-4 text-center">
      {who_we_are
        ? who_we_are.map((item) => (
            <div key={item.id}>
              <h1
                className={`${squada.className} text-[40px] md:text-[60px] lg:text-[120px]`}
              >
                <CountUp end={item.number} delay={2} />+
              </h1>
              <p className="font-[700]  text-[12px] mx-auto w-[50%] lg:w-full md:text-[16px] lg:text-[25px] ">
                {item.item}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Numbers;
