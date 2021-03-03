import React, { useState } from "react";

import Content from "../Projects/Content";
import Modal from "./Modal";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const length = props.data.data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const openModal = (url) => {
    setSelectedImage(url);
  };
  return (
    <div className="slider">
      <FaAngleLeft className="arrow-left" onClick={prevSlide} />
      <FaAngleRight className="arrow-right" onClick={nextSlide} />
      {props.data.data.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slider.image}
                className="image"
                alt={slider.description}
                onClick={() => openModal(slider.image)}
              />
            )}
          </div>
        );
      })}
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      {/* <div className="hide-desk">
        <Content data={props.data} />
      </div> */}
    </div>
  );
};

export default Slider;
