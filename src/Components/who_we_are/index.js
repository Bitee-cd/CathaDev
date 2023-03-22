import { about } from "@/utils/data";
import React from "react";
import { useAppContext } from "../Context/AppContext";

const WhoWeAre = () => {
  const { who_we_are } = about;
  const { squada } = useAppContext();

  return (
    <section className="screen-center mt-10" id="section-3">
      <h4 className="my-5 font-[700]">WHO WE ARE</h4>
      <div className="md:w-[80%]">
        <p>
          Human-centered design is our core approach as we keep users
          preferences front of mind and treat our clients as collaborators as we
          make every effort to include and co-create with them every step of the
          way.
        </p>
        <p className="mt-5">
          We will create a look and feel for your organization that is
          consistent with your mission and target audience. We will work
          together to create a toolbox of visual assets and guidelines that will
          allow you to confidently use your identity across all touch points.
        </p>
      </div>
      <div className="my-10 grid grid-cols-4 text-center">
        {who_we_are
          ? who_we_are.map((item) => (
              <div key={item.id}>
                <h1
                  className={`${squada.className} text-[40px] md:text-[60px] lg:text-[120px]`}
                >
                  {item.number}+
                </h1>
                <p className="font-[700]  text-[12px] mx-auto w-[50%] lg:w-full md:text-[16px] lg:text-[25px] ">
                  {item.item}
                </p>
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default WhoWeAre;
