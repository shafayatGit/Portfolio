import React from "react";
import { motion } from "framer-motion";

import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaFigma, FaJs } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import GradientText from "../../Styles/GradientText";
import { Slide, Zoom } from "react-awesome-reveal";
import { fadeInUp } from "../../../../motionVarients";
const Skills = () => {
  const skills = {
    title: "My Skills",
    description:
      " MARN stack developer passionate about creating fast, secure, and interactive web solutions — from database to user interface.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs />,
        name: "Node JS",
      },
      {
        icon: <SiExpress />,
        name: "Express JS",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
    ],
  };
  return (
    <div>
      <div className="jet justify-center items-center flex flex-col gap-[30px] text-center">
        <Zoom>
          <h3 className="play text-4xl font-bold flex items-center gap-2">
            My{" "}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-4xl bold"
            >
              Skills
            </GradientText>
          </h3>
        </Zoom>
        <Slide>
          <p className="max-w-[600px]  mx-auto xl:mx-0 px-5">
            {skills.description}
          </p>
        </Slide>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid text-xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center mx-auto gap-10 md:gap-20"
        >
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"html 5"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <FaHtml5 />
              </span>
            </div>
          </div>
          <Tooltip className="text-lg" id="my-tooltip"></Tooltip>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"css3"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <FaCss3 />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"react.js"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <FaReact />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"tailwind css"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <SiTailwindcss />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"node.js"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <FaNodeJs />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"express.js"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <SiExpress />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"mongodb"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <SiMongodb />
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"figma"}
              className=" bg-black w-full h-full p-5 rounded-xl hover:text-lime-600 active:text-lime-600 group-hover:text-accent transition-all duration-300"
            >
              <span className="text-6xl">
                <FaFigma></FaFigma>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
