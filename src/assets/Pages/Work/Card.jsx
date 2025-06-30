import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { TbBrandGithub } from "react-icons/tb";
import "./Card.css";
import { Link } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fadeInLeft, fadeInRight, fadeInUp } from "../../../../motionVarients";

const Card = () => {
  return (
    <div className=" jet px-5 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10">
      {/* ServCheck Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="card"
      >
        <div className="content">
          <div className="back">
            <div className="back-content bg_4"></div>
          </div>
          <div className="front">
            <div className="img">
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/DH0SmD5m/Serv-Check-Banner.png

"
                alt=""
              />
            </div>
            <div className="front-content">
              <div className="description">
                <div className=""></div>
                <div className="flex mb-5 flex-col gap-1">
                  <h1 className="flex gap-3 text-lg items-center">
                    ServCheck:
                    <div class="group relative">
                      <Link to={"https://servcheck-3aac5.web.app/"}>
                        {" "}
                        <button className="w-8 hover:text-blue-400 hover:scale-125 duration-200">
                          <IoIosLink size={25}></IoIosLink>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-0 left-[170%] -translate-x-[5%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
   py-2 text-sm font-bold
  shadow-md transition-all border-lime-500 duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        Live <span>Link</span> <span></span>
                      </span>
                    </div>
                  </h1>
                  <h1 className="flex items-center gap-1">
                    ClientSide Repository:
                    <div class="group relative">
                      <Link
                        to={"https://github.com/shafayatGit/ServCheck_Client"}
                      >
                        {" "}
                        <button>
                          <TbBrandGithub
                            size={28}
                            className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                          ></TbBrandGithub>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-10 left-[300%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ClientSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1>
                  {/* <h1 className="flex items-center gap-2">
                    ServerSide Repository:
                    <div class="group relative">
                      <button>
                        <FaGithubAlt
                          size={28}
                          className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                        ></FaGithubAlt>
                      </button>
                      <span
                        class="absolute -top-10 left-[340%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ServerSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1> */}
                </div>
              </div>

              <div className="description">
                <div className="">
                  <p className="text-xl flex items-center justify-between">
                    <h1>Usage</h1>
                    {/* Modal Button */}
                    <button
                      onClick={() =>
                        document.getElementById("ServCheck_Modal").showModal()
                      }
                      className="mt-3 relative font-semibold rounded text-lg px-3 py-1 overflow-hidden group bg-lime-700 relative hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-700 active:bg-gradient-to-r active:from-lime-500 active:to-lime-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-lime-800 active:ring-2 active:ring-offset-2 active:ring-lime-800 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                      <span class="relative">More Details</span>
                    </button>

                    {/* Modal 2 */}
                    <dialog id="ServCheck_Modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="bg-lime-700  btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="mb-2 font-bold text-2xl bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                          ServCheck
                        </h3>
                        <Carousel infiniteLoop={true} autoPlay={true}>
                          <div>
                            <img src="https://i.ibb.co/xKxfrh6c/Serv-Check-Banner.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/GfXphPzC/Serv-Check-allservice.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/q8xqDhC/Serv-Check-details.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/YTKzdh0Y/Serv-Check-Login.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/B54D5NdW/Serv-Check-review.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/Q3JZz1h0/Serv-Check-service.png" />
                          </div>
                        </Carousel>
                        <p className="py-4 text-sm">
                          ServCheck is a dynamic service review platform where
                          users can add, explore, and share feedback on
                          services, offering a seamless experience for managing
                          reviews, authenticating users, and building trust
                          through real interactions.
                        </p>
                        <div>
                          <h1 className="mb-2 font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Tech Stacks
                          </h1>
                          <div className=" grid grid-cols-3 md:grid-cols-4 text-center  gap-3 text-sm">
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              MongoDB
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Node.Js
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Express.Js
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Firebase
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              JWT
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Challenges:
                          </h1>
                          <h1 className="text-sm">Handling Star Ratings</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Future Planes:
                          </h1>
                          <h1 className="text-sm">
                            Implementing Admin Panels,Real Time Analytics
                          </h1>
                        </div>
                      </div>
                    </dialog>
                  </p>
                </div>
                <p className="card-footer">
                  ServCheck is a dynamic service review platform where users can
                  add, explore, and share feedback on services, offering a
                  seamless experience for managing reviews, authenticating
                  users, and building trust through real interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Hobby Hub Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="card"
      >
        <div className="content">
          <div className="back">
            <div className="back-content bg_1"></div>
          </div>
          <div className="front">
            <div className="img">
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/rfX6PCYc/Hobby-Hub-Banner.png

"
                alt=""
              />
            </div>
            <div className="front-content">
              <div className="description">
                <div className=""></div>
                <div className="flex mb-5 flex-col gap-1">
                  <h1 className="flex gap-3 text-lg items-center">
                    HobbyHub:
                    <div class="group relative">
                      <Link to={"https://hobbyhub-4131d.web.app/"}>
                        <button className="w-8 hover:text-blue-400 hover:scale-125 duration-200">
                          <IoIosLink size={25}></IoIosLink>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-0 left-[170%] -translate-x-[10%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
   py-2 text-sm font-bold
  shadow-md transition-all border-lime-500 duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        Live <span>Link</span> <span></span>
                      </span>
                    </div>
                  </h1>
                  <h1 className="flex items-center gap-1">
                    ClientSide Repository:
                    <div class="group relative">
                      <Link
                        to={
                          "https://github.com/shafayatGit/HobbyHub_ClientSide"
                        }
                      >
                        <button>
                          <TbBrandGithub
                            size={28}
                            className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                          ></TbBrandGithub>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-10 left-[300%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ClientSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1>
                  {/* <h1 className="flex items-center gap-2">
                    ServerSide Repository:
                    <div class="group relative">
                      <button>
                        <FaGithubAlt
                          size={28}
                          className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                        ></FaGithubAlt>
                      </button>
                      <span
                        class="absolute -top-10 left-[340%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ServerSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1> */}
                </div>
              </div>

              <div className="description">
                <div className="">
                  <p className="text-xl flex items-center justify-between">
                    <h1>Usage</h1>
                    {/* Modal Button */}
                    <button
                      onClick={() =>
                        document.getElementById("HobbyHub_Modal").showModal()
                      }
                      className="mt-3 relative font-semibold rounded text-lg px-3 py-1 overflow-hidden group bg-lime-700 relative hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-700 active:bg-gradient-to-r active:from-lime-500 active:to-lime-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-lime-800 active:ring-2 active:ring-offset-2 active:ring-lime-800 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                      <span class="relative">More Details</span>
                    </button>

                    {/* Modal 1 */}
                    <dialog id="HobbyHub_Modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="bg-lime-700  btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="mb-2 font-bold text-2xl bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                          HobbyHub
                        </h3>
                        <Carousel infiniteLoop={true} autoPlay={true}>
                          <div>
                            <img src="https://i.ibb.co/LzZS079V/Hobby-Hub-banner.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/fVCg5Ytd/Hobby-Hub-groups.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/YF3WcWBZ/Hobby-Hub-details.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/CKLnk0sB/Hobby-Hub-registration.png" />
                          </div>
                        </Carousel>
                        <p className="py-4 text-sm">
                          HobbyHub is a community platform that connects people
                          through local hobby-based groups, making it easy to
                          discover, join, or create clubs around shared
                          passions.
                        </p>
                        <div>
                          <h1 className="mb-2 font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Tech Stacks
                          </h1>
                          <div className=" grid grid-cols-3 md:grid-cols-4 text-center gap-3 text-sm">
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              MongoDB
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Node.Js
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Express.Js
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Firebase
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Challenges:
                          </h1>
                          <h1 className="text-sm">
                            Handling Group Joining Deadline{" "}
                          </h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Future Planes:
                          </h1>
                          <h1 className="text-sm">
                            Implementing Real Time Chat,Adding Widgets
                          </h1>
                        </div>
                      </div>
                    </dialog>
                  </p>
                </div>
                <p className="card-footer pb-3">
                  HobbyHub is a community platform that connects people through
                  local hobby-based groups, making it easy to discover, join, or
                  create clubs around shared passions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Job Track Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="card"
      >
        <div className="content">
          <div className="back">
            <div className="back-content bg_2"></div>
          </div>
          <div className="front">
            <div className="img">
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/d4TscTH9/Job-Track-Banner.png"
                alt=""
              />
            </div>
            <div className="front-content">
              <div className="description">
                <div className=""></div>
                <div className="flex mb-5 flex-col gap-1">
                  <h1 className="flex gap-3 text-lg items-center">
                    JobTrack:
                    <div class="group relative">
                      <Link to={"https://job-track-as9.netlify.app/"}>
                        {" "}
                        <button className="w-8 hover:text-blue-400 hover:scale-125 duration-200">
                          <IoIosLink size={25}></IoIosLink>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-0 left-[170%] -translate-x-[10%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
   py-2 text-sm font-bold
  shadow-md transition-all border-lime-500 duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        Live <span>Link</span> <span></span>
                      </span>
                    </div>
                  </h1>
                  <h1 className="flex items-center gap-1">
                    ClientSide Repository:
                    <div class="group relative">
                      <Link to={"https://github.com/shafayatGit/Job-Track.git"}>
                        <button>
                          <TbBrandGithub
                            size={28}
                            className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                          ></TbBrandGithub>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-10 left-[300%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ClientSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1>
                  {/* <h1 className="flex items-center gap-2">
                    ServerSide Repository:
                    <div class="group relative">
                      <button>
                        <FaGithubAlt
                          size={28}
                          className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                        ></FaGithubAlt>
                      </button>
                      <span
                        class="absolute -top-10 left-[340%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ServerSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1> */}
                </div>
              </div>

              <div className="description">
                <div className="">
                  <p className="text-xl flex items-center justify-between">
                    <h1>Usage</h1>
                    {/* Modal Button */}
                    <button
                      onClick={() =>
                        document.getElementById("JobTrack_Modal").showModal()
                      }
                      className="mt-3 relative font-semibold rounded text-lg px-3 py-1 overflow-hidden group bg-lime-700 relative hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-700 active:bg-gradient-to-r active:from-lime-500 active:to-lime-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-lime-800 active:ring-2 active:ring-offset-2 active:ring-lime-800 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                      <span class="relative">More Details</span>
                    </button>

                    {/* Modal 1 */}
                    <dialog id="JobTrack_Modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="bg-lime-700  btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="mb-2 font-bold text-2xl bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                          JobTrack
                        </h3>
                        <Carousel infiniteLoop={true} autoPlay={true}>
                          <div>
                            <img src="https://i.ibb.co/23QTrT56/Job-Track-banner.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/HLgZVDnQ/Job-Track-companies.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/kg81jRNd/Job-Track-details.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/tMBmxgTX/Job-Track-modal.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/S4GTdwQh/Job-Track-register.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/hJRNRjwy/Job-Track-section.png" />
                          </div>
                        </Carousel>
                        <p className="py-4 text-sm">
                          Job Track is a sleek and intuitive platform that
                          empowers job seekers to effortlessly explore and
                          compare opportunities across multiple companies,
                          streamlining the path from discovery to application.
                        </p>
                        <div>
                          <h1 className="mb-2 font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Tech Stacks
                          </h1>
                          <div className=" grid grid-cols-3 text-center gap-3 text-sm">
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React Router
                            </p>

                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Firebase
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Tailwind CSS
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Challenges:
                          </h1>
                          <h1 className="text-sm">Handling Authentication</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Future Planes:
                          </h1>
                          <h1 className="text-sm">
                            Implementing Reviews And Comments,Pictures
                            Validation
                          </h1>
                        </div>
                      </div>
                    </dialog>
                  </p>
                </div>
                <p className="card-footer">
                  Job Track is a sleek and intuitive platform that empowers job
                  seekers to effortlessly explore and compare opportunities
                  across multiple companies, streamlining the path from
                  discovery to application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Law Bd Card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="card"
      >
        <div className="content">
          <div className="back">
            <div className="back-content bg_3"></div>
          </div>
          <div className="front">
            <div className="img">
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/PZ78qNY7/Law-Bd-Banner.png"
                alt=""
              />
            </div>
            <div className="front-content">
              <div className="description">
                <div className=""></div>
                <div className="flex flex-col mb-5 gap-1">
                  <h1 className="flex gap-3 text-lg items-center">
                    LawBD:
                    <div class="group relative">
                      <Link to={"https://law-bd-domain.netlify.app/"}>
                        <button className="w-8 hover:text-blue-400 hover:scale-125 duration-200">
                          <IoIosLink size={25}></IoIosLink>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-0 left-[170%] -translate-x-[10%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
   py-2 text-sm font-bold
  shadow-md transition-all border-lime-500 duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        Live <span>Link</span> <span></span>
                      </span>
                    </div>
                  </h1>
                  <h1 className="flex items-center gap-1">
                    ClientSide Repository:
                    <div class="group relative">
                      <Link to={"https://github.com/shafayatGit/Law-BD"}>
                        <button>
                          <TbBrandGithub
                            size={28}
                            className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                          ></TbBrandGithub>
                        </button>
                      </Link>
                      <span
                        class="absolute -top-10 left-[300%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ClientSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1>
                  {/* <h1 className="flex items-center gap-2">
                    ServerSide Repository:
                    <div class="group relative">
                      <button>
                        <FaGithubAlt
                          size={28}
                          className="w-8 hover:text-blue-400 hover:scale-125 duration-200"
                        ></FaGithubAlt>
                      </button>
                      <span
                        class="absolute -top-10 left-[340%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-4 rounded-lg border 
  border-lime-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 group-active:scale-100 flex gap-1"
                      >
                        <span>ServerSide</span>GitHub<span></span>
                      </span>
                    </div>
                  </h1> */}
                </div>
              </div>

              <div className="description">
                <div className="">
                  <p className="text-xl flex items-center justify-between">
                    <h1>Usage</h1>
                    {/* Modal Button */}
                    <button
                      onClick={() =>
                        document.getElementById("LawBD_Modal").showModal()
                      }
                      className="mt-3 relative font-semibold rounded text-lg px-3 py-1 overflow-hidden group bg-lime-700 relative hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-700 active:bg-gradient-to-r active:from-lime-500 active:to-lime-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-lime-800 active:ring-2 active:ring-offset-2 active:ring-lime-800 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                      <span class="relative">More Details</span>
                    </button>

                    {/* Modal 1 */}
                    <dialog id="LawBD_Modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="bg-lime-700  btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="mb-2 font-bold text-2xl bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                          LawBD
                        </h3>
                        <Carousel infiniteLoop={true} autoPlay={true}>
                          <div>
                            <img src="https://i.ibb.co/svfyxW2s/Law-BD-banner.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/hJktc69z/lawbd-lawers.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/4wkJD8Nj/lawbd-details.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/SDqwffp8/lawbd-appoint.png" />
                          </div>
                          <div>
                            <img src="https://i.ibb.co/sdSM73vB/lawbd-contact.png" />
                          </div>
                        </Carousel>
                        <p className="py-4 text-sm">
                          LawBD is a seamless platform that allows users to
                          browse detailed doctor profiles and effortlessly book
                          appointments, making healthcare access simple and
                          convenient.
                        </p>
                        <div>
                          <h1 className="mb-2 font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Tech Stacks
                          </h1>
                          <div className=" grid grid-cols-3 text-center gap-3 text-sm">
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              React Router
                            </p>

                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              Tailwind CSS
                            </p>
                            <p className="bg-lime-700 rounded-full border border-lime-300 px-4 py-1">
                              JavaScript
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Challenges:
                          </h1>
                          <h1 className="text-sm">Adding Charts</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <h1 className="mb-2 text-lg font-bold bg-clip-text text-transparent [background-image:linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa)]">
                            Future Planes:
                          </h1>
                          <h1 className="text-sm">
                            Implementing Real Time Location Map
                          </h1>
                        </div>
                      </div>
                    </dialog>
                  </p>
                </div>
                <p className="card-footer">
                  LawBD is a seamless platform that allows users to browse
                  detailed doctor profiles and effortlessly book appointments,
                  making healthcare access simple and convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
