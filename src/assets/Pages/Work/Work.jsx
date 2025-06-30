import React from "react";
import Card from "./Card";
import GradientText from "../../Styles/GradientText";
import { Zoom } from "react-awesome-reveal";

const Work = () => {
  return (
    <div id="works_container" className="mt-32">
      <Zoom>
        <h1 className="text-center play flex justify-center gap-2 text-4xl  mt-10 mb-10">
          My{" "}
          <div className="">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-4xl bold"
            >
              Projects
            </GradientText>
          </div>{" "}
        </h1>
      </Zoom>
      <Card></Card>
    </div>
  );
};

export default Work;
