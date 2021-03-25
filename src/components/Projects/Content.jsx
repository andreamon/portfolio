import React from "react";
import { useState } from "react";
import Modal from "../Slider/Modal";

const Content = (props) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <p className="font-bold text-xl md:text-2xl text-pink-500 uppercase">
        {props.data.title}
      </p>
      <p className="my-6 md:my-8 text-base">{props.data.description}</p>
      <button
        className="mx-4 py-4 px-6 rounded bg-indigo-500 text-white font-semibold text-sm uppercase tracking-wide hover:bg-indigo-400"
        onClick={openModal}
      >
        Galería de imágenes
      </button>
      <a href={props.data.github} target="_blank" rel="noopener noreferrer">
        <button className="mx-4 py-4 px-6 rounded bg-pink-500 text-white font-semibold text-sm uppercase tracking-wide hover:bg-pink-400">
          Repositorio en github
        </button>
      </a>

      {open && <Modal closeModal={closeModal} images={props.data.data}/>}
    </>
  );
};

export default Content;
