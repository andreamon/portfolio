import React from "react";

import Slider from "../Slider/ImageSlider";

const Project = (props) => {
  return (
    <div>
      <div className="container flex flex-row justify-between items-center">
        <div className="flex-1">
          <Slider data={props.data.data} />
        </div>
        <div className="flex-1 flex-col text-center">
          <p className="font-bold text-2xl text-pink-500 uppercase">
            {props.data.title}
          </p>
          <p className="my-8 text-base">
            {props.data.description}
          </p>
          <a
            href={props.data.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-4 px-6 rounded bg-pink-500 text-white font-semibold text-sm uppercase tracking-wide hover:bg-pink-400">
              Repositorio en github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
