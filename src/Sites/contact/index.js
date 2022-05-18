import React, { useRef } from "react";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const form = useRef();
  const generalButtonClassName =
    "appearance-none rounded-none relative block w-full lg:w-3/5 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-4 mx-auto";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="w-4/5 mx-auto border shadow border-cyan-700 shadow-cyan-700 my-16 px-16 py-4">
      <form onSubmit={handleOnSubmit} ref={form}>
        <h1 className="text-4xl uppercase text-center font-mono font-bold border-b-2 border-cyan-700 mb-6">
          Have some questions?
        </h1>
        <div className="flex my-4 justify-around">
          <h3 className="flex items-center">
            <MdOutlinePlace />
            Hungary
          </h3>
          <h4 className="text-sm italic">17 May 2022 / Baja 6500</h4>
        </div>
        <input
          name="from_name"
          type="email"
          autoComplete="email"
          required
          className={`${generalButtonClassName}`}
          placeholder="email address"
        />
        <input
          name="subject"
          type="text"
          required
          className={`${generalButtonClassName}`}
          placeholder="subject"
        />
        <textarea
          name="message"
          cols="40"
          rows="5"
          required
          className={`${generalButtonClassName}`}
          placeholder="content"
        ></textarea>
        <button
          type="submit"
          className="group relative w-full lg:w-2/5 mx-auto items-center flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-cyan-600 hover:bg-cyan-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 hover:shadow-cyan-800 hover:shadow-sm"
        >
          <AiOutlineSend size={20} />
          <h1 className="mx-2">Send email</h1>
        </button>
      </form>
    </div>
  );
};

export default Contact;
