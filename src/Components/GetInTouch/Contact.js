import React from "react";
import Form from "./Form";
import ContactSvg from "../svg/Contact";
import { useAppContext } from "../Context/AppContext";
import BackGroundLines from "../Reusable/BackGroundLines";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const { squada, spartan, textLeave, textEnter } = useAppContext();

  return (
    <Element name="contact" className="element" id="section-8">
      <div className={`relative ${spartan.className}`} id="contact">
        <BackGroundLines
          position="left-[40%] -translate-x-1/2"
          top="bottom-0 "
        />
        <section className=" screen-center my-10 lg:my-20">
          <Fade delay={400} damping={0.3} duration={2000} cascade>
            <h4 className="my-5 font-[700] uppercase">Get in touch</h4>

            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={`${squada.className}`}
            >
              Lets Create Something Exciting Together!
            </h1>
            <p className={`${squada.className} md:w-[70%]`}>
              Describe your project or specific request below and we will
              contact you shortly with a quotation
            </p>
          </Fade>
          <div className="grid md:grid-cols-2">
            <div className="absolute left-1/2 -translate-x-1/2 w-full md:relative -z-20 md:z-0 opacity-20 md:opacity-100 flex items-center justify-center">
              <ContactSvg />
            </div>
            <Form />
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Contact;
