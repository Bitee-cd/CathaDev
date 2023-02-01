import Image from "next/image";
import styles from "./styles.module.css";

function AboutUs() {
  return (
    <div className={`screen-center my-20 relative`}>
      <div className={`${styles.sphere} z-1 absolute`}></div>
      <div className="z-2 bg-transparent">
        <h2 className="text-fontSize3 font-semibold">ABOUT US</h2>

        <div>
          <h2 className="text-fontSize1">What Will You Benefit?</h2>
          <p className="text-fontSize3 w-2/3">
            We specialize in helping businesses navigate the ever-changing
            digital landscape and reach their target audience through a variety
            of channels so with Cathadev you get;
          </p>
          <div className="flex">
            <div className="flex-1">
              <p className="text-fontSize3 mt-2">
                Digital masterpieces that captivate and convert, Online presence
                elevated to new heights, Visually stunning websites that drive
                results and Innovative designs for the modern web.
              </p>
              <div className="mt-5 flex items-center">
                <div className="rounded-full w-5 h-5 bg-black flex justify-center">
                  <Image
                    alt=""
                    src={"/images/arrow-forward.svg"}
                    width={10}
                    height={10}
                  />
                </div>
                <span className="px-2 text-center">Contact us</span>
              </div>

              {/* <div className=''>
                <div className=' bg-black h-1 mt-8 w-6'>

                </div>
        uuu
                <hr />
            </div> */}
            </div>
            <div className="flex-2">
              <Image
                alt=""
                src={"/images/image10.png"}
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
