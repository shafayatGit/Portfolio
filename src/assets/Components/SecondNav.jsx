import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const SecondNav = ({ handleWork }) => {
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

  return (
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
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow shadow-cyan-400 text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* 2nd */}
              <li
                className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
              >
                <NavLink
                  to={"/resume"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow shadow-cyan-400 text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Resume
                </NavLink>
              </li>
              {/* 3rd */}
              <li
                className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
              >
                <NavLink
                  to={"/work"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow shadow-cyan-400 text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
          <button
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
              <li
                className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
              >
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow px-3 py-1 shadow-cyan-400 md:text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* 2nd */}
              <li
                className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
              >
                <NavLink
                  to={"/resume"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow px-3 py-1 shadow-cyan-400 md:text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Resume
                </NavLink>
              </li>
              {/* 3rd */}
              <li
                className="play relative inline-block text-white px-4 py-2 after:rounded-2xl
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full "
              >
                <NavLink
                  to={"/work"}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full font-medium shadow shadow-cyan-400 px-3 py-1 lg:text-lg  bg-gradient-to-br from-lime-300 to-cyan-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  Work
                </NavLink>
              </li>
              <button
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
  );
};

export default SecondNav;
