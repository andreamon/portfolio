import React from "react";

import Slider from "../Slider/Slider";
import Content from "./Content";

const Project = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="md:flex-1">
        <Slider data={props.data} />
      </div>
      {/* <div className="md:flex-1 md:flex-col text-center hide-mobile"> */}
      <div className="md:flex-2 md:flex-col text-center">
        <Content data={props.data} />
      </div>
    </div>
  );
};

export default Project;
