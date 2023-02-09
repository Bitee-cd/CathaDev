import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import SingleItem from "./SingleItem";
import { about } from "@/utils/data";
import Benefits from "./Benefits";

function AboutUs() {
  const { squada } = useAppContext();
  const { what_you_get, benefits } = about;
  return (
    <div className={` screen-center my-20 relative`}>
      <div
        className={`${styles.sphere} absolute text-black dark:text-pri`}
      ></div>
      <div className="z-2 zindex1">
        <h4 className=" font-semibold">ABOUT US</h4>

        <div>
          <h1 className={`${squada.className}  w-[70%] `}>
            What Will You Benefit?
          </h1>
          <p className=" w-[80%] ">
            We specialize in helping businesses navigate the ever-changing
            digital landscape and reach their target audience through a variety
            of channels so with Cathadev you get;
          </p>
          <div className="md:flex justify-between mt-5">
            <div className="md:w-[65%]">
              <div className="flex flex-col gap-2">
                {what_you_get.map((item) => (
                  <SingleItem key={item.id} item={item} />
                ))}
              </div>
              <div className=""></div>
              <div className="flex w-[90%] mt-5 flex-col gap-2 border-t-[3px] border-sec dark:border-pri pb-2">
                {benefits.map((item) => (
                  <Benefits key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="md:w-1/3 ">
              <Image
                alt=""
                src={"/images/image10.png"}
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
  );
}
export default AboutUs;
