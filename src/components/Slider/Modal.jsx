import React, { useState } from "react";

import { FaAngleLeft, FaAngleRight, FaWindowClose } from "react-icons/fa";

const Modal = ({ closeModal, images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="backdrop">
      <FaWindowClose className="close-modal" onClick={closeModal} />
      <FaAngleLeft className="arrow-left" onClick={prevSlide} />
      <FaAngleRight className="arrow-right" onClick={nextSlide} />
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <>
                <img
                  src={item.image}
                  className="backdrop-img"
                  alt={item.description}
                />
                <div id="caption">{item.description}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Modal;

// <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           ></div>
