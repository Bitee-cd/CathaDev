import React from "react";
import { useAppContext } from "../Context/AppContext";
import { Fade } from "react-awesome-reveal";
import Numbers from "./Numbers";

const WhoWeAre = () => {
  return (
    <section className="screen-center mt-10" id="section-3">
      <Fade cascade damping={0.3} delay={200}>
        <h4 className="my-5 font-[700]">WHO WE ARE</h4>

        <p className="md:w-[80%]">
          Human-centered design is our core approach as we keep users
          preferences front of mind and treat our clients as collaborators as we
          make every effort to include and co-create with them every step of the
          way.
        </p>
        <p className="mt-5 md:w-[80%]">
          We will create a look and feel for your organization that is
          consistent with your mission and target audience. We will work
          together to create a toolbox of visual assets and guidelines that will
          allow you to confidently use your identity across all touch points.
        </p>
        <Numbers />
      </Fade>
    </section>
  );
};

export default WhoWeAre;
