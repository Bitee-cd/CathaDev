import React from "react";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Image from "next/image";
import image from "../../../public/images/services/enough_said.png";
import Button from "../Reusable/Button";

const EnoughSaid = () => {
  const { squada, textEnter, textLeave } = useAppContext();
  return (
    <section className="my-10 lg:my-20 screen-center">
      <div className={`${styles.background} flex p-5`}>
        <div className="w-[55%]">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className={`${squada.className} uppercase`}
          >
            enough said?
          </h1>
          <h2 className={`uppercase leading-snug w-[80%]`}>
            Lets get to work!
          </h2>
          <div className="flex-start flex">
            <Button title="Contact Us" />
          </div>
        </div>
        <div className={` w-[45%] relative`}>
          <Image alt="Mountains" src={image} placeholder="blur" quality={100} />
        </div>
      </div>
    </section>
  );
};

export default EnoughSaid;
