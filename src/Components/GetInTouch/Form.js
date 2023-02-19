import React from "react";

const Form = () => {
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
      <div className="mt-5 flex justify-center ">
        <input type="submit" className="submit_btn cursor-pointer" />
      </div>
    </form>
  );
};

export default Form;
