import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";

const Form = () => {
  const { textEnter, textLeave } = useAppContext();
  return (
    <form className="grid gap-y-5">
      <div className="my-2">
        <p className="label-text">What is Your Name</p>
        <input type="text" placeholder="Your Full Name *" className="input " />
      </div>
      <div className="my-2">
        <p className="label-text">What is Email Address</p>
        <input type="email" placeholder="Email Address *" className="input" />
      </div>
      <div className="my-2">
        <p className="label-text">Let us contact you</p>
        <input type="text" placeholder="Your Full Name *" className="input" />
      </div>
      <div className="my-2">
        <p className="label-text">What is the name of your organization?</p>
        <input
          type="text"
          placeholder="Your Organization name  *"
          className="input"
        />
      </div>
      <div className="my-2">
        <p className="label-text">What is your budget like?</p>
        <input type="text" placeholder="$1800-2200*" className="input" />
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
