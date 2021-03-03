import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClose = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="backdrop" onClick={handleClose}>
      <img src={selectedImage} alt="Imagen ampliada" />
    </div>
  );
};

export default Modal;
