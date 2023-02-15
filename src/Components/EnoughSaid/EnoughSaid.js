import React from "react";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Image from "next/image";
import image from "../../../public/images/about_main.png";
import Button from "../Reusable/Button";

const EnoughSaid = () => {
  const { squada } = useAppContext();
  return (
    <section className="my-10 lg:my-20 screen-center">
      <div className={`${styles.background} flex p-5`}>
        <div className="w-[45%]">
          <h3 className={`${squada.className} uppercase`}>enough said?</h3>
          <h2 className={`uppercase leading-snug`}>Lets get to work</h2>
          <div className="flex-start flex">
            <Button title="Contact Us" />
          </div>
        </div>
        <div className={`${styles.clip} w-[50%] relative`}>
          <Image
            alt="Mountains"
            src={image}
            placeholder="blur"
            quality={100}
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EnoughSaid;
