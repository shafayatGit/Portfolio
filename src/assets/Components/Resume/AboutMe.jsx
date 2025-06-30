import React from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaPhoneAlt } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import GradientText from "../../Styles/GradientText";
import { Zoom } from "react-awesome-reveal";
import { fadeInUp } from "../../../../motionVarients";

const AboutMe = () => {
  return (
    <div>
      <div>
        <div className="jet justify-center items-center flex flex-col gap-[30px] md:text-center">
          <Zoom>
            <h3 className="play text-4xl font-bold flex items-center gap-2">
              {" "}
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={5}
                showBorder={false}
                className="custom-class text-4xl bold"
              >
                About Me
              </GradientText>
            </h3>
          </Zoom>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <p className="max-w-[600px] text-left px-5 mx-auto xl:mx-0 ">
              I'm a humble and curious soul, currently pursuing my degree in
              Computer Science and Engineering. Guided by my faith and a deep
              love for learning, I’ve found my passion in programming and
              building meaningful web experiences. As a MERN stack developer, I
              enjoy collaborating in teams, solving real-world problems, and
              constantly expanding my knowledge. Beyond code, I’m a gamer at
              heart—especially when it comes to cricket—and always eager to
              grow, both personally and professionally.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className=" text-xl flex flex-col gap-5 md:justify-center mx-auto "
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
