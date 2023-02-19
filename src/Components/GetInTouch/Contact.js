import React from "react";
import Form from "./Form";
import ContactSvg from "../svg/Contact";

const Contact = ({ squada, spartan }) => {
  return (
    <section className="screen-center my-10 lg:my-20">
      <h4 className="my-5 font-[700] uppercase">Get in touch</h4>
      <h1 className={`${squada.className}`}>
        Lets Create Something Exciting Together!
      </h1>
      <p className={`${squada.className} w-[70%]`}>
        Describe your project or specific request below and we will contact you
        shortly with a quotation
      </p>
      <div className="grid md:grid-cols-2">
        <div className="absolute md:relative zindex_2 flex items-center justify-center">
          <ContactSvg />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
