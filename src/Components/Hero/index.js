import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import Button from "../Reusable/Button";

export default function HeroSection() {
  const { squada } = useAppContext();
  return (
    <section className={` min-h-screen flex items-center relative`}>
      {/* <div className={`zindex1 w-[50%] h-[80%] top-0 right-0 absolute `}>
        <div className={` top-0 right-[15%] flex justify-end`}>
          <img
            className=""
            src={"/images/hero-image.png"}
            alt="hero-image"
            className=" object-contain"
          />
        </div>
      </div> */}
      <div className="screen-center my-10 ">
        <div className={`${styles.zindex2} `}>
          <h1
            className={`${squada.className} text-[120px]  leading-snug font-[900]`}
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
          <Button title="Contact Us" />
        </div>
      </div>
    </section>
  );
}
