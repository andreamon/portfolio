import React from "react";

const Content = (props) => {
  return (
    <>
      <p className="font-bold text-xl md:text-2xl text-pink-500 uppercase">
        {props.data.title}
      </p>
      <p className="my-6 md:my-8 text-base">{props.data.description}</p>
      <a href={props.data.github} target="_blank" rel="noopener noreferrer">
        <button className="py-4 px-6 rounded bg-pink-500 text-white font-semibold text-sm uppercase tracking-wide hover:bg-pink-400">
          Repositorio en github
        </button>
      </a>
    </>
  );
};

export default Content;
