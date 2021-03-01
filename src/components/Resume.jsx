import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-8">
      <div className="flex justify-between items-center container">
        <img
          className="w-1/2"
          src="../portfolio/images/mi-cv.svg"
          alt="descargar cv"
        />
        <a href="../portfolio/files/andrea-montano-cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="py-5 px-20 rounded bg-pink-500 text-white font-semibold text-xl uppercase tracking-wide hover:bg-pink-400">
            Descarga mi cv
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
