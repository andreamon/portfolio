import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FaAngleLeft className="arrow-left" onClick={prevSlide} />
      <FaAngleRight className="arrow-right" onClick={nextSlide} />
      {props.data.map((slider, index) => {
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
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
