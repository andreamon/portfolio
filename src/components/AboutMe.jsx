import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="container flex flex-col md:flex-row md:justify-between items-center mt-8 md:mt-0">
      {/* <div className="flex-1 flex-col items-start"> */}
      <div className="flex-col items-start">
        <p className="font-bold text-2xl md:text-3xl">
          Hola! Soy <span className="text-pink-500">Andrea</span>
        </p>
        <p className="my-2 text-lg md:text-xl font-semibold">Desarrollo Frontend</p>
        <p className="text-lg md:text-xl">
          Estoy aprendiendo constantemente sobre nuevas tecnologías y mejorando
          mis habilidades profesionales. Me gusta aprender sobre diferentes tecnologías para así poder implementar
          las mejores soluciones.
        </p>
      </div>
      <img className="md:max-w-full md:h-auto" src="../portfolio/images/about-me.png" alt="sobre mi" />
      {/* <div className="flex-1">
        <img className="md:max-w-full md:h-auto" src="../portfolio/images/about-me.png" alt="sobre mi" />
      </div> */}
    </div>
  );
};

export default AboutMe;
