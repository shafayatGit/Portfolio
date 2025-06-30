import React from "react";
import { motion } from "framer-motion";
import GradientText from "../Styles/GradientText";
import Form from "./Form/Form";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { FaLanguage, FaPhoneAlt } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { fadeIn, fadeInLeft, fadeInUp } from "../../../motionVarients";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="contact_section" className="">
      <h1 className="text-center play flex justify-center gap-2 text-4xl  mt-32 mb-10">
        <Zoom>
          <div className="flex items-center gap-3">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-4xl bold"
            >
              Contact
            </GradientText>
            Me
          </div>
        </Zoom>{" "}
      </h1>
      <div className=" flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="mb-32 jet text-xl flex flex-col gap-5 md:justify-center mx-auto "
        >
          <h1 className="flex gap-2 items-center">
            <MdDriveFileRenameOutline className="text-lime-500" size={25} />{" "}
            Md.Shafayat Hossain Patowary
          </h1>
          <h1 className="flex gap-2 items-center">
            <FaPhoneAlt size={25} className="text-lime-500" /> +8801635873987
          </h1>
          <h1 className="flex gap-2 items-center">
            <IoMdGlobe size={25} className="text-lime-500" /> Bangladeshi
          </h1>
          <h1 className="flex gap-2 items-center">
            <MdOutlineMail size={25} className="text-lime-500" />{" "}
            shafayathossain.drmc@gmail.com
          </h1>
          <h1 className="flex gap-2 items-center">
            <FaLanguage size={25} className="text-lime-500" /> Bangla,English
          </h1>
        </motion.div>
        <div className="px-1">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
