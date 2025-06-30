import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Form.css";
import { FaTelegramPlane } from "react-icons/fa";
import GradientText from "../../Styles/GradientText";
import { fadeInRight, fadeInUp } from "../../../../motionVarients";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xqabwgak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thanks for Reaching Me Out!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to Send Message.");
      }
    } catch (err) {
      toast.error("Error occurred. Please try again.");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        class=" jet mb-32 form-container"
      >
        <form onSubmit={handleSubmit} class="form">
          <div class="form-group">
            <label className="text-lg text-white" for="name">
              Name
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="form-group">
            <label className="text-lg" for="email">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label className="text-lg" for="textarea">
              How Can We Help You?
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              id="textarea"
              rows="10"
              cols="50"
              required
            >
              {" "}
            </textarea>
          </div>
          <button
            class="relative w-56 px-9 text-center inline-flex items-center  py-3 overflow-hidden text-lg font-medium text-white border-2 border-lime-600 rounded-full hover:text-white group hover:bg-gray-50 active:text-white group active:bg-gray-50"
            type="submit"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-lime-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 active-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative flex  gap-2 items-center">
              <span>
                <FaTelegramPlane />
              </span>{" "}
              Message Me{" "}
            </span>
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Form;
