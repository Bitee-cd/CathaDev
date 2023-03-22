import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useAppContext } from "../Context/AppContext";

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
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.PUBLIC_KEY
      )
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
          name="name"
          type="text"
          placeholder="Your Full Name *"
          className="input "
        />
      </div>
      <div className="my-2">
        <p className="label-text">What is Email Address</p>
        <input
          name="email"
          type="email"
          placeholder="Email Address *"
          className="input"
        />
      </div>
      <div className="my-2">
        <p className="label-text">Let us contact you</p>
        <input
          name="full_name"
          type="text"
          placeholder="Your Full Name *"
          className="input"
        />
      </div>
      <div className="my-2">
        <p className="label-text">What is the name of your organization?</p>
        <input
          type="text"
          placeholder="Your Organization name  *"
          className="input"
          name="organistaion"
        />
      </div>
      <div className="my-2">
        <p className="label-text">What is your budget like?</p>
        <input
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
      <motion.div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`submit_btn origin-top-left mt-10 mx-auto bg-pri dark:bg-sec `}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      >
        <p
          // onMouseEnter={textEnter}
          // onMouseLeave={textLeave}
          className="uppercase  text-black text-center dark:text-pri m-5"
        >
          submit
        </p>
      </motion.div>
    </form>
  );
};

export default Form;
