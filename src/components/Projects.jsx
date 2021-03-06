import React from "react";
import Project from "./Projects/Project";
import DataPatitas from "./Slider/DataPatitas";
import DataMobile from "./Slider/DataMobile";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <p className="text-2xl md:text-3xl font-semibold tracking-wide uppercase text-center">
        Proyectos
      </p>
      <Project data={DataPatitas} />
      <Project data={DataMobile} />
    </div>
  );
};

export default Projects;
