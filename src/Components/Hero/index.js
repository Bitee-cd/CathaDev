import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Button from "../Reusable/Button";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

export default function HeroSection() {
  const { squada, textLeave, textEnter } = useAppContext();
  return (
    <Element name="home" className="element">
      <section
        id="section-1"
        className={` min-h-screen 2xl:min-h-[70vh] overflow-hidden  mx-auto flex items-center relative`}
      >
        <div
          className={`zindex1 md:w-[50%]  top-0 h-full md:top-1/2 md:-translate-y-1/2 right-0 absolute  `}
        >
          {/* <div className={` h-full w-full flex justify-end`}>
            <img
              src={"/images/hero-image.png"}
              alt="hero-image"
              className=" object-cover h-full w-full "
            />
          </div> */}
        </div>
        <div className={`${styles.zindex2} screen-center my-20 relative`}>
          <div className={` `}>
            <Fade duration={1000} damping={0.3} cascade>
              <h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className={`${squada.className} big-text leading-none md:leading-snug font-[900]`}
              >
                Establishing Your Online Presence With Perfection
              </h1>

              <p className=" mt-3 lg:w-[80%] mb-10">
                At CathaDev, we will create a wonderful digital experience for
                your business as we work together to enhance your online
                presence through quality responsive websites that will improve
                user experience, boost branding and increase revenue with high
                customer conversion rates and good SEO
              </p>
            </Fade>
          </div>

          <div className="">
            <Button title="Contact Us" />
          </div>

          <Paragraph
            text1="Web"
            text2="Development"
            y="1"
            delay="0"
            position="  lg:top-[10%] top-0 left-[0] "
          />
          <Paragraph
            text1="Mobile"
            text2="Development"
            x="-1"
            delay="0.3"
            position="lg:left-1/3 top-[-7%] right-0"
          />
          <Paragraph
            text1="User Experience"
            text2="Design"
            x="1"
            delay="0.6"
            position=" lg:top-[-10%] lg:left-[75%]  left-[10%]  top-[30%]"
          />
          <Paragraph
            text1="User Interface"
            text2="Design"
            y="-1"
            delay="0.9"
            position="top-[40%] left-[50%]"
          />
          <Paragraph
            text1="Custom Web"
            text2="Design"
            x="-1"
            delay="1.2"
            position="lg:bottom-[0] bottom-[15%] left-0 lg:left-[20%]"
          />
          <Paragraph
            text1="Graphic"
            text2="Design"
            x="1"
            delay="1.5"
            position="bottom-[0] lg:right-[5%] right-0"
          />
        </div>
      </section>
    </Element>
  );
}
export const Paragraph = ({ text1, text2, position, x, y, delay }) => {
  const { textLeave, textEnter, spartan } = useAppContext();
  return (
    <motion.div
      initial={{ x: x ? x * 500 : 0, y: y ? y * 500 : 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, duration: 1 }}
      className={`circle ${position}`}
      whileHover={{ scale: 1.2 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        delay: delay ? delay * 2 : 0,
      }}
    >
      <p
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`${spartan.className} uppercase circle-text text-sec text-center dark:text-pri m-3 lg:m-5`}
      >
        {text1} <br></br>
        {text2}
      </p>
    </motion.div>
  );
};
