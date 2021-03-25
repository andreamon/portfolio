import React from "react";
import Content from "./Content";

const Project = (props) => {
  return (
    <div className="flex flex-col md:justify-between md:items-center my-16 text-center">
      <div className="flex-1">
        <Content data={props.data} />
      </div>
    </div>
  );
};

export default Project;
