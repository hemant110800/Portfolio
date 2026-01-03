import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";
import gmail from "../../images/gmail.png";
import gfg from "../../images/gfg.png";
import hackerrank from "../../images/hackerrank.png";
import contact from "../../images/contact.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formVal = useRef(null);
  const [formStates, setFormStates] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [submitState, setSubmitState] = useState({
    status: "",
    value: ""
  });
  const [isLoad, setLoadState] = useState(false);

  const stateChangeHandler = e => {
    console.log(e.target);
    setFormStates(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = e => {
    console.log(e.target, formVal.current);
    setLoadState(true);
    e.preventDefault();
    console.table(formStates);
    emailjs
      .sendForm("service_c0h062d", "template_jq9sefm", formVal.current, {
        publicKey: "J1Of5_7ojKXvvQyGR"
      })
      .then(
        () => {
          setLoadState(false);
          setSubmitState(prev => {
            return {
              ...prev,
              status: "Success",
              value: "Thank you for your valuable feedback!!"
            };
          });

          console.log("SUCCESS!");

          setTimeout(() => {
            setSubmitState({ status: "", value: "" });
          }, 3000);

          setFormStates({ from_name: "", from_email: "", message: "" });
        },
        error => {
          setLoadState(false);

          setSubmitState(prev => {
            return {
              ...prev,
              status: "Failure",
              value: "Something went wrong!!"
            };
          });

          console.log("FAILED...", error.text);

          setTimeout(() => {
            setSubmitState({ status: "", value: "" });
          }, 3000);

          setFormStates({ from_name: "", from_email: "", message: "" });
        }
      );
  };

  return (
    <div className="bg-violet-50 m-auto lg:w-[50%] sm:w-[75%] rounded-md p-5">
      <div className="w-fit m-auto p-2 mb-2 text-violet-700 font-bold lg:text-2xl text-lg flex gap-2">
        <img src={contact} alt="Contact" className="w-[18%]" />
        Get In Touch
      </div>
      <form
        ref={formVal}
        className="flex flex-col gap-10"
        onSubmit={submitHandler}
      >
        <div className="flex gap-2 items-start">
          <label className="lg:w-1/6 md:3/6 w-2/6 font-bold ">Name</label>
          <input
            type="text"
            value={formStates.from_name}
            name="from_name"
            placeholder="Enter your name"
            className="p-1 border-2 rounded-md border-violet-200 w-full"
            required
            onChange={stateChangeHandler}
          ></input>
        </div>
        <div className="flex gap-2 items-start">
          <label className="lg:w-1/6 md:3/6 w-2/6 font-bold">Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            value={formStates.from_email}
            className="p-1 border-2 rounded-md border-violet-200 w-full"
            required
            onChange={stateChangeHandler}
          ></input>
        </div>
        <div className="flex gap-2 items-start">
          <label className="lg:w-1/6 md:3/6 w-2/6 font-bold">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formStates.message}
            placeholder="Please provide your valuable feedback!"
            className="p-1 border-2 rounded-md border-violet-200 w-full"
            required
            onChange={stateChangeHandler}
          ></textarea>
        </div>
        <div className="flex gap-3 items-center m-auto">
          <button
            className="w-fit bg-violet-900 text-yellow-200 font-bold p-1.5 px-4 rounded-md disabled:bg-violet-500"
            disabled={
              formStates.from_name === "" ||
              formStates.from_email === "" ||
              formStates.message === ""
            }
          >
            {isLoad?"Submitting...":"Submit"}
          </button>
          <span
            className={
              submitState.status === "Success" 
                ? "text-green-700"
                : "text-rose-500"
            }
          >
            {submitState.value}
          </span>
        </div>
      </form>
      <div className="flex gap-4 w-full items-center flex justify-center mt-4">
        <a href="https://github.com/hemant110800/">
          <img src={github} alt="github" className="w-[30px]" />
        </a>
        <a href="https://www.linkedin.com/in/hemantbhati">
          <img src={linkedIn} alt="linkedin" className="w-[30px]" />
        </a>
        <a href="mailto:hemant110800@gmail.com">
          <img src={gmail} alt="mail" className="w-[30px]" />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/hemant110800/profile">
          <img src={gfg} alt="mail" className="w-[30px]" />
        </a>
        <a href="https://www.hackerrank.com/hemant110800">
          <img src={hackerrank} alt="mail" className="w-[30px]" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
