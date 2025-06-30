import React from "react";
import { motion } from "framer-motion";
import GradientText from "../../Styles/GradientText";
import { Zoom } from "react-awesome-reveal";
import { fadeInUp } from "../../../../motionVarients";

const Education = () => {
  const education = {
    title: "My Education",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempora iste eius deserunt inventore expedita reiciendis modi accusantium dicta natus?",
    items: [
      {
        institution: "United International University",
        degree: "Bachelor in Computer Science and Technology",
        duration: "Present",
      },
      {
        institution: "Dhaka Residential Model School",
        degree: "Higher Secondary Certificate",
        duration: "2019-2021",
      },
      {
        institution: "Feni Government Pilot High School",
        degree: "Secondary School Certificate",
        duration: "2013-2019",
      },
    ],
  };
  return (
    <div>
      <div className="poppins justify-center items-center flex flex-col gap-[30px]">
        <Zoom>
          <h3 className="play text-4xl font-bold flex items-center gap-2">
            My{" "}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-4xl bold"
            >
              Education
            </GradientText>
          </h3>
        </Zoom>
        {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
          {education.description}
        </p> */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <ul className="px-5 grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto gap-[30px]">
            {education.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r  from-lime-200 via-blue-300  to-lime-800 p-0.5 rounded-2xl flex flex-col justify-center items-center"
                >
                  <li className="bg-black w-full h-full p-5 rounded-xl text-xl">
                    <span className="text-left mb-3 flex flex-col w-full">
                      <span className="border mb-2 font-medium w-36 text-lg text-black px-2 bg-gradient-to-r from-lime-700 to-blue-400  rounded-full border-lime-200 ">
                        Institution:
                      </span>
                      <span className="text-xl">{item.institution}</span>
                    </span>
                    <h3 className="text-left mb-3 flex flex-col ">
                      <span className="border mb-2 border-lime-200 font-medium w-28 text-lg text-black px-5 bg-gradient-to-r from-lime-700 to-blue-400  rounded-full">
                        Degree:
                      </span>
                      <span className="text-xl">{item.degree}</span>
                    </h3>
                    <p className="text-left mb-3 flex flex-col w-full">
                      <span className="border mb-2 font-medium w-36 text-lg text-black px-5 bg-gradient-to-r from-lime-700 to-blue-400  rounded-full border-lime-200 ">
                        Duration:
                      </span>
                      <span className="text-xl">{item.duration}</span>
                    </p>
                  </li>
                </div>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
