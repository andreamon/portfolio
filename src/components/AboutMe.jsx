import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="container flex flex-row justify-between items-center">
      <div className="flex-1 flex-col items-start">
        <p className="font-bold text-3xl">
          Hola! Soy <span className="text-pink-500">Andrea</span>
        </p>
        <p className="my-2 text-xl font-semibold">Desarrollo Frontend</p>
        <p className="text-xl">
          Estoy aprendiendo constantemente sobre nuevas tecnologías y mejorando
          mis habilidades profesionales. Me considero una persona proactiva. Me
          gusta aprender sobre diferentes tecnologías para así poder implementar
          las mejores soluciones.
        </p>
      </div>
      <div className="flex-1">
        <img className="max-w-full h-auto" src="../portfolio/images/about-me.png" alt="sobre mi" />
      </div>
    </div>
  );
};

export default AboutMe;
