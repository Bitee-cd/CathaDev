import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import SingleItem from "./SingleItem";
import { about } from "@/utils/data";
import Benefits from "./Benefits";
import image from "../../../public/images/about_main.png";
import lines from "../../../public/images/about/line.png";
import line_dark from "../../../public/images/about/line_dark.png";

function AboutUs() {
  const { squada } = useAppContext();
  const { what_you_get, benefits } = about;
  return (
    <div className="relative">
      <Image
        alt=" trusted hands holding website"
        placeholder="blur"
        priority
        src={lines}
        sizes="100vw"
        style={{
          width: "100vw",
          height: "auto",
        }}
        className="w-screen absolute top-1/3 right-1/2 translate-x-1/2 -z-0"
      />
      <div className={` screen-center my-20 relative`}>
        <div
          className={`${styles.sphere} absolute text-black dark:text-pri`}
        ></div>

        <div className="z-2 zindex1">
          <h4 className=" font-semibold">ABOUT US</h4>

          <div>
            <h1 className={`${squada.className}  lg:w-[70%] `}>
              What Will You Benefit?
            </h1>
            <p className=" lg:w-[80%] ">
              We specialize in helping businesses navigate the ever-changing
              digital landscape and reach their target audience through a
              variety of channels so with Cathadev you get;
            </p>
            <div className="lg:flex justify-between mt-5">
              <div className="lg:w-[65%]">
                <div className="flex flex-col gap-2">
                  {what_you_get.map((item) => (
                    <SingleItem key={item.id} item={item} />
                  ))}
                </div>
                <div className=""></div>
                <div className="flex lg:w-[90%] mt-5 flex-col gap-2 border-t-[3px] border-sec dark:border-pri pb-2">
                  {benefits.map((item) => (
                    <Benefits key={item.id} item={item} />
                  ))}
                </div>
              </div>
              <div className="hidden lg:block md:w-1/3 ">
                <Image
                  alt=" trusted hands holding website"
                  placeholder="blur"
                  priority
                  src={image}
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
