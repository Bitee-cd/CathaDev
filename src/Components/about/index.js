import Image from "next/image";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";

function AboutUs() {
  const { squada } = useAppContext();
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
          <div className="md:flex justify-between border border-red-600">
            <div className="md:w-[65%]">
              <p className=" mt-2">
                Digital masterpieces that captivate and convert, Online presence
                elevated to new heights, Visually stunning websites that drive
                results and Innovative designs for the modern web.
              </p>
              {/* <div className="w-1/2">
                <div className="rounded-full w-5 h-5 bg-black flex justify-center">
                  <Image
                    alt=""
                    src={"/images/arrow-forward.svg"}
                    width={10}
                    height={10}
                  />
                </div>
                <span className="px-2 text-center">Contact us</span>
              </div> */}

              {/* <div className=''>
                <div className=' bg-black h-1 mt-8 w-6'>

                </div>
        uuu
                <hr />
            </div> */}
            </div>
            <div className="md:w-1/3 bg-red-600 z-20">
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
