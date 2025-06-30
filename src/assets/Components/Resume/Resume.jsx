import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";

const Resume = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <div
        id="resume_section"
        className="flex jet  max-w-6xl mx-auto flex-col mt-32 md:flex-row gap-3"
      >
        <div className="flex items-center flex-col md:flex-row ">
          {/* Sidebar */}
          <aside className=" text-white w-full md:w-84 p-4 px-10 md:pl-10">
            <div className="">
              <ul tabindex="0" class="">
                <li className="py-2   ">
                  <button
                    onClick={() => navigate("/")}
                    className={`text-xl w-full cursor-pointer relative inline-flex items-center justify-center p-4 md:px-8 px-2 py-3  md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group ${
                      pathname == "/" ? "border-b-8 border-lime-700" : ""
                    }`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gradient-to-br from-lime-800 to-cyan-300 group-hover:translate-x-0 active-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
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
                    <span className="absolute flex items-center justify-center w-full h-full text-black font-medium transition-all duration-300 transform group-hover:translate-x-full active-hover:translate-x-full ease bg-gradient-to-br from-lime-700 to-cyan-300">
                      Skills
                    </span>
                    <span className="relative invisible">Skills</span>
                  </button>
                </li>

                <li className="py-2   ">
                  <button
                    onClick={() => navigate("/resume/education")}
                    className={`text-xl w-full cursor-pointer relative inline-flex items-center justify-center p-4 md:px-8 px-2 py-3  md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group ${
                      pathname == "/resume/education"
                        ? "border-b-8 border-lime-700"
                        : ""
                    }`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gradient-to-br from-lime-800 to-cyan-300 group-hover:translate-x-0 active-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
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
                    <span className="absolute flex items-center justify-center w-full h-full text-black font-medium transition-all duration-300 transform group-hover:translate-x-full active-hover:translate-x-full ease bg-gradient-to-br from-lime-700 to-cyan-300">
                      Education
                    </span>
                    <span className="relative invisible">Education</span>
                  </button>
                </li>

                <li className="py-2   ">
                  <button
                    onClick={() => navigate("/resume/aboutMe")}
                    className={`text-xl w-full cursor-pointer relative inline-flex items-center justify-center p-4 md:px-8 px-2 py-3  md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group ${
                      pathname == "/resume/aboutMe"
                        ? "border-b-8 border-lime-700"
                        : ""
                    }`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gradient-to-br from-lime-800 to-cyan-300 group-hover:translate-x-0 active-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
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
                    <span className="absolute flex items-center justify-center w-full h-full text-black font-medium transition-all duration-300 transform group-hover:translate-x-full active-hover:translate-x-full ease bg-gradient-to-br from-lime-700 to-cyan-300">
                      About Me
                    </span>
                    <span className="relative invisible">About Me</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
