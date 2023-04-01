import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useAppContext } from "../Context/AppContext";

const data = {
  SERVICE_ID: "service_ek0yd2i",
  TEMPLATE_ID: "template_hshfbq4",
  PUBLIC_KEY: "aPqlsJUPDU9KAqpLD",
};

const Form = () => {
  const { textEnter, textLeave } = useAppContext();
  const SendMessage = (params) => {
    const templateParams = {
      to_name: "Cathadev",
      notes: "Message from cathadev portfolio",
      from_name: params.name,
      message: params.message,
      budget: params.budget,
      organistaion: params.organistaion,
    };
    const pubkey = process.env.PUBLIC_KEY;

    emailjs
      .send(data.SERVICE_ID, data.TEMPLATE_ID, templateParams, data.PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    SendMessage(form_values);
  };
  return (
    <form className="grid gap-y-5" onSubmit={submitHandler}>
      <div className="my-2">
        <p className="label-text">What is Your Name</p>
        <input
          required
          name="name"
          type="text"
          placeholder="Your Full Name *"
          className="input "
        />
      </div>
      <div className="my-2">
        <p className="label-text">What is Email Address</p>
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address *"
          className="input"
        />
      </div>

      <div className="my-2">
        <p className="label-text">What is your budget like?</p>
        <input
          required
          name="budget"
          type="text"
          placeholder="$1800-2200*"
          className="input"
        />
      </div>
      <div className="my-2">
        <p className="label-text">Describe Your Project</p>
        <textarea
          rows="5"
          placeholder="Message"
          required
          type="number"
          name="message"
          className="input2 "
        />
      </div>
      {/* <motion.div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`submit_btn origin-top-left mt-10 mx-auto bg-pri dark:bg-sec `}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      > */}
      <input
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        type="submit"
        className="uppercase submit_btn origin-top-left mt-10 mx-auto bg-pri dark:bg-sec text-black text-center dark:text-pri m-5"
      />
      {/* </motion.div> */}
    </form>
  );
};

export default Form;
