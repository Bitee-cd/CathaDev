import React from "react";
import { useAppContext } from "../Context/AppContext";
import BackGroundLines from "../Reusable/BackGroundLines";
import Items from "./Items";

const Services = () => {
  const { squada } = useAppContext();
  return (
    <div className="relative">
      <BackGroundLines position="right-[15%]" top="top-[10%]" />
      <BackGroundLines position="left-[15%]" top="top-[80%]" />
      <section className="screen-center my-20 zindex2">
        <h4 className="my-5 font-[700] uppercase">Services</h4>
        <h1 className={`${squada.className} big-text`}>
          Prospects Will Adore Your Product, You Will Enjoy Our Method
        </h1>
        <p className="my-5 md:w-[80%]">
          We create strategic digital solutions that helps new businesses grow
          and work with established brands to make bold digital transformations.
        </p>
        <div className="my-20 relative">
          <Items />
        </div>
      </section>
    </div>
  );
};

export default Services;
