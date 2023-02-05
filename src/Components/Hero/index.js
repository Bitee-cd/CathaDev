import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Button from "../Reusable/Button";

export default function HeroSection() {
  const { squada } = useAppContext();
  return (
    <section
      className={` min-h-screen overflow-hidden  mx-auto flex items-center relative`}
    >
      <div
        className={`zindex1 w-[50%] mt-20 top-1/2 -translate-y-1/2 right-0 absolute  `}
      >
        <div className={` top-0  flex justify-end`}>
          <img
            src={"/images/hero-image.png"}
            alt="hero-image"
            className=" object-contain h-[80%] w-[80%]"
          />
        </div>
      </div>
      <div className={`${styles.zindex2} screen-center my-10 `}>
        <div className={` `}>
          <h1
            className={`${squada.className} big-text  leading-snug font-[900]`}
          >
            Establishing Your Online Presence With Perfection
          </h1>
          <p className="text-[25px] mt-3 md:w-[80%] mb-10">
            At CathaDev, we will create a wonderful digital experience for your
            business as we work together to enhance your online presence through
            quality responsive websites that will improve user experience, boost
            branding and increase revenue with high customer conversion rates
            and good SEO
          </p>
        </div>
        <div className="flex-start flex">
          <Button title="Contact Us" />
        </div>
        <div className="circle top-1/3 left-[10%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            Web <br></br>development
          </p>
        </div>
        <div className="circle left-1/3 top-[10%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            Mobile <br></br>development
          </p>
        </div>
        <div className="circle top-[0] right-[10%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            User Eperience <br></br>design
          </p>
        </div>
        <div className="circle top-1/2 left-[50%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            User Interface <br></br>design
          </p>
        </div>
        <div className="circle bottom-[0] left-[30%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            Custom Web <br></br>design
          </p>
        </div>
        <div className="circle bottom-[0] right-[5%] bg-pri dark:bg-black border-[2px] border-black dark:border-pri">
          <p className="uppercase text-black text-center dark:text-pri m-5">
            Graphic <br></br>design
          </p>
        </div>
      </div>
    </section>
  );
}
