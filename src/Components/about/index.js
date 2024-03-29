import { useState } from "react";
import Image from "next/image";
import { useAppContext } from "../Context/AppContext";
import SingleItem from "./SingleItem";
import { about } from "@/utils/data";
import Benefits from "./Benefits";
import image1 from "../../../public/images/about_main.png";
import image2 from "../../../public/images/price.png";
import image3 from "../../../public/images/google.png";
import BackGroundLines from "../Reusable/BackGroundLines";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

function AboutUs() {
  const { squada, textLeave, textEnter } = useAppContext();
  const { what_you_get, benefits } = about;
  const [image, setImage] = useState(1);

  return (
    <>
      <Element name="about-us" className="element" id="section-2">
        <div className="relative" id="about-us">
          <BackGroundLines
            direction="left"
            position="left-1/2 -translate-x-1/2"
            top="top-1/4 -translate-y-1/2"
          />
          <div className={` screen-center my-20 relative`}>
            <div className="z-2 zindex1">
              <h4 className=" font-semibold">ABOUT US</h4>

              <div>
                {/* <Fade delay={200} damping={0.3} duration={1000} cascade> */}
                <h1
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className={`${squada.className}  lg:w-[70%] `}
                >
                  What Will You Benefit?
                </h1>
                <p className=" lg:w-[80%] ">
                  IN TODAY’S DAY AND AGE EVERY BUSINESS NEEDS A WEBSITE!
                </p>
                <p className=" lg:w-[80%] ">With Cathadev you get;</p>
                {/* </Fade> */}
                <div className="lg:flex justify-between mt-5">
                  <div className="lg:w-[65%]">
                    {/* <Fade cascade> */}
                    <div className="flex flex-col gap-2">
                      {/* <Fade delay={200} damping={0.3} duration={1000} cascade> */}
                      {what_you_get.map((item) => (
                        <SingleItem key={item.id} item={item} />
                      ))}
                      {/* </Fade> */}
                    </div>

                    <div className="flex lg:w-[90%] mt-5 flex-col gap-2 border-t-[3px] border-sec dark:border-pri pb-2">
                      {/* <Fade delay={400} damping={0.3} duration={1000} cascade> */}
                      {benefits.map((item) => (
                        <Benefits
                          key={item.id}
                          item={item}
                          setImage={setImage}
                        />
                      ))}
                      {/* </Fade> */}
                    </div>
                    {/* </Fade> */}
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="hidden lg:block md:w-1/3 "
                  >
                    <Image
                      alt=" trusted hands holding website"
                      placeholder="blur"
                      priority
                      quality="100"
                      src={
                        image === 1
                          ? image1
                          : image === 2
                          ? image2
                          : image === 3
                          ? image3
                          : image1
                      }
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
export default AboutUs;
