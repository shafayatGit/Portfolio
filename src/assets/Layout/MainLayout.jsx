import React, { useEffect, useState } from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import SecondNav from "../Components/SecondNav";
import { div } from "framer-motion/client";
import ScrollToTop from "../Components/ScrollToTop";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup if unmounted
  }, []);
  return (
    <div className="bg-[url('https://i.ibb.co/V0dvK9Z9/bg.jpg')] bg-cover bg-center bg-no-repeat">
      {isLoading ? (
        <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
          </div>
        </div>
      ) : (
        <div>
          <div class="marquee-container">
            <div class="marquee-text play">
              👋 Welcome to My Portfolio! This Portfolio is Under Construction
              🚧
            </div>
          </div>
          {/* <Navber></Navber> */}
          {/* <SecondNav></SecondNav> */}
          {/* <Nav></Nav> */}
          <Outlet></Outlet>
          <ScrollToTop></ScrollToTop>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
