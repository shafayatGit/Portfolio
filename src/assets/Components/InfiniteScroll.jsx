import React from "react";
import "./InfiniteScroll.css"; // Create this CSS file or use styled-components
import GradientText from "../Styles/GradientText";
import { Slide, Zoom } from "react-awesome-reveal";

const items = [
  {
    img: "https://i.ibb.co/B7WMzxv/skill-icons-css.png",
    title: "HTML",
  },
  {
    img: "https://i.ibb.co/Psbw9NS1/skill-icons-html.png",
    title: "CSS",
  },
  {
    img: "https://i.ibb.co/1GC0JRvH/skill-icons-tailwindcss-dark.png",
    title: "Tailwind",
  },
  {
    img: "https://i.ibb.co/y2FDtzX/skill-icons-javascript.png",
    title: "JavaScript",
  },
  {
    img: "https://i.ibb.co/3DJwGC6/skill-icons-react-dark.png",
    title: "React",
  },
  {
    img: "https://i.ibb.co/bjMZNp0k/logos-react-router.png",
    title: "React Router",
  },
  {
    img: "https://i.ibb.co/X6v0c4w/skill-icons-expressjs-dark.png",
    title: "Express JS",
  },
  {
    img: "https://i.ibb.co/pjXVJW0J/skill-icons-nodejs-dark.png",
    title: "Node JS",
  },
  {
    img: "https://i.ibb.co/gLvTdvj5/logos-firebase.png",
    title: "Firebase",
  },
  {
    img: "https://i.ibb.co/gLnmSgKj/logos-jwt-icon.png",
    title: "JWT",
  },
  {
    img: "https://i.ibb.co/nvsPLHW/skill-icons-mongodb-1.png",
    title: "MongoDB",
  },
  {
    img: "https://i.ibb.co/tTMW1Tqb/skill-icons-c.png",
    title: "C",
  },
];

export default function InfiniteScroll() {
  const repeatedItems = [...items, ...items]; // Repeat items for seamless scroll

  return (
    <div className=" w-full mt-32 ">
      <Zoom>
        <h1 className="text-center play flex justify-center gap-2 text-4xl font-medium mt-10 ">
          What I have
          <div>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-4xl bold"
            >
              Learned
            </GradientText>
          </div>
        </h1>
      </Zoom>
      <Zoom>
        {" "}
        <div className="scroll-container play">
          <div className="scroll-content">
            {repeatedItems.map((item, index) => (
              <div className="item" key={index}>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div className="flex gap-3 items-center">
                  <div>
                    <img className="w-12 h-12" src={item.img} alt="" />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
}
