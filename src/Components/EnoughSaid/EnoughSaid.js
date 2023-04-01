import React from "react";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Image from "next/image";
import image from "../../../public/images/services/enough_said.png";
import Button from "../Reusable/Button";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const EnoughSaid = () => {
  const { squada, textEnter, textLeave } = useAppContext();

  return (
    <section className="my-10 lg:my-20 screen-center" id="section-5">
      <div className={`${styles.background} flex p-5`}>
        <div className="w-[65%]">
          <Fade casade damping={0.5}>
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
          </Fade>
          <div className="flex-start flex">
            <Button title="Contact Us" />
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className={` w-[45%] relative ${styles.clip}`}
        >
          <Image
            alt="Mountains"
            src={image}
            className="w-full h-full object-cover"
            placeholder="blur"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EnoughSaid;
