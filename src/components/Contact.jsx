import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="my-12">
      <p className="text-3xl font-semibold tracking-wide uppercase text-center">
        Contacto
      </p>
      <div className="flex justify-between items-center container">
        <div>
          <p>
            Me podes contactar vía e-mail a{" "}
            <span className="font-semibold">andrea14_06_2@hotmail.com.</span>
          </p>
          <p>
            Y mi perfil en LinkedIn es:{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/andrea-evangelina-monta%C3%B1o/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrea Montaño
            </a>
          </p>
        </div>
        <img
          className="w-1/3"
          src="../portfolio/images/contactame.svg"
          alt="contactame"
        />
      </div>
    </div>
  );
};

export default Contact;
