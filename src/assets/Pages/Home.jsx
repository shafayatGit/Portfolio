import React, { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Slide, Zoom } from "react-awesome-reveal";

import InfiniteScroll from "../Components/InfiniteScroll";
import GradientText from "../Styles/GradientText";
import Work from "./Work/Work";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import Resume from "../Components/Resume/Resume";

import Contact from "../Components/Contact";
import { fadeInUp } from "../../../motionVarients";

FaFacebook;

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleWorks = () => {
    const works_container = document.getElementById("works_container");
    works_container.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleResume = () => {
    const works_container = document.getElementById("resume_section");
    works_container.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    const works_container = document.getElementById("contact_section");
    works_container.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className=" max-w-6xl mx-auto mb-24">
      {/* Navber */}
      <div className="">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`fixed top-4  left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6 py-3  md:py-4 mt-4 rounded-full shadow-md backdrop-blur-md transition-all duration-300 
        ${
          scrolled
            ? "bg-black/40 border-2 border-white/10"
            : "bg-transparent border-2 border-white/20"
        }`}
        >
          <div className="flex items-center justify-between text-white text-sm font-medium">
            <h1 className="mb-2 text-2xl md:text-3xl play">
              Shafayat
              <span className="jet text-5xl rounded-full bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent">
                .
              </span>
            </h1>

            {/* Desktop Nav */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-medium text-lg">
                {/* 1st Link */}
                <li
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Home
                    </GradientText>
                  </NavLink>
                </li>
                {/* 2nd */}
                <li
                  onClick={handleResume}
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Resume
                    </GradientText>
                  </NavLink>
                </li>
                {/* 3rd */}
                <li
                  onClick={handleWorks}
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Work
                    </GradientText>
                  </NavLink>
                </li>
              </ul>
            </div>
            <button
              onClick={handleContact}
              type="button"
              className=" hidden md:flex slit-in-vertical button_nav px-4 py-2 md:px-7 md:py-2"
            >
              <strong className="play font-normal hover:text-white text-base md:text-lg">
                Hire Me
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>

            {/* Mobile Toggle with Animation */}
            <motion.button
              className="md:hidden focus:outline-none text-red"
              onClick={toggleMobile}
              whileTap={{ scale: 0.85 }}
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="fixed top-30 left-4 right-4 z-40 bg-black/50 rounded-xl border border-white/10 p-4 backdrop-blur-md text-white md:hidden"
            >
              <ul className="flex flex-col gap-4 text-base text-center">
                {/* 1st Link */}
                <li
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Home
                    </GradientText>
                  </NavLink>
                </li>
                {/* 2nd */}
                <li
                  onClick={handleResume}
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Resume
                    </GradientText>
                  </NavLink>
                </li>
                {/* 3rd */}
                <li
                  onClick={handleWorks}
                  className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
                >
                  <NavLink className="w-full font-medium ">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={5}
                      showBorder={false}
                      className="left-0 custom-class text-xl font-medium"
                    >
                      Work
                    </GradientText>
                  </NavLink>
                </li>
                <button
                  onClick={handleContact}
                  type="button"
                  className="flex slit-in-vertical button_nav px-4 py-2 md:px-7 md:py-2"
                >
                  <strong className="play font-normal text-white text-base md:text-lg">
                    Hire Me
                  </strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Home */}
      <div>
        <section className=" gap-10 jet flex justify-between flex-col-reverse md:flex-row mt-40 items-center px-5">
          <div>
            <div className=" order-2 md:order-none text-center md:text-left flex flex-col gap-4">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <h1 className="md:pl-5 tracking-in-expand text-xl font-normal text-white ">
                  MERN Stack Developer
                </h1>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <h1 className="md:pl-5 text-3xl">Hello I'm</h1>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={5}
                  showBorder={false}
                  className="left-0 custom-class text-4xl font-medium"
                >
                  Md. Shafayat Hossain Patowary
                </GradientText>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <h1 className="md:pl-5">
                  I design and build modern, scalable web solutions using
                  MongoDB, Express.js, React, and Node.js.
                </h1>
              </motion.div>
              <div className="px-6 flex flex-col md:flex-row gap-7">
                {" "}
                <div className=" max-w-6xl mx-auto">
                  {" "}
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                  >
                    <button className="flex slit-in-vertical button_nav px-4 py-2 md:px-7 md:py-2">
                      <strong className="play font-normal text-white text-base md:text-lg">
                        Download CV
                      </strong>
                      <div id="container-stars">
                        <div id="stars"></div>
                      </div>

                      <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                      </div>
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                >
                  <div>
                    <div class="slit-in-vertical active:scale-x-105 hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-center md:justify-start text-2xl items-center shadow-xl z-10  dark:bg-[#191818] bg-[#191818] gap-2 p-2 rounded-full">
                      <button class="before:hidden active:before:flex hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['GitHub'] before:bg-black dark:before:bg-white dark:before:text-black  before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 active:scale-125  dark:bg-[#191818] rounded-full p-2 px-3">
                        <Link
                          target="_blank"
                          to={"https://github.com/shafayatGit"}
                        >
                          <FaGithub></FaGithub>
                        </Link>
                      </button>

                      <button class="before:hidden active:before:flex hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['LinkedIN'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 active:scale-125  dark:bg-[#191818] rounded-full p-2 px-3">
                        <Link
                          target="_blank"
                          to={
                            "https://www.linkedin.com/in/shafayat-hossain-patowary/"
                          }
                        >
                          <FaLinkedinIn></FaLinkedinIn>
                        </Link>
                      </button>
                      <button class="before:hidden active:before:flex hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['shafayathossain.drmc@gmail.com'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 active:scale-125  dark:bg-[#191818] rounded-full p-2 px-3">
                        <BiLogoGmail />
                      </button>
                      <button class="before:hidden active:before:flex hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Facebook'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 active:scale-125  dark:bg-[#191818] rounded-full p-2 px-3">
                        <Link
                          target="_blank"
                          to={
                            "https://www.facebook.com/share/1CNcgU7HML/?mibextid=wwXIfr"
                          }
                        >
                          <FaFacebook></FaFacebook>
                        </Link>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <Zoom>
            <div className="home-img">
              <div className="img-box">
                <div className="img-item">
                  <img src="my-photo.JPEG" />
                </div>
              </div>
            </div>
          </Zoom>
        </section>
        <InfiniteScroll></InfiniteScroll>
        <Work></Work>
        <Resume></Resume>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
