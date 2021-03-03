import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="container flex justify-between items-start md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="block"> */}
        <div className="block text-xl font-semibold mt-10 ml-4 md:mt-0 md:ml-0">Andrea Montaño</div>
        {/* <div className="md:flex md:justify-end tracking-wide"> */}
        <div
          className={`${
            openMenu ? "block text-center w-full" : "hidden"
          } md:flex md:justify-end tracking-wide text-sm md:text-base md:font-medium`}
        >
          <a href="#about-me" className="item-header">
            Sobre mi
          </a>
          <a href="#resume" className="item-header">
            Mi CV
          </a>
          <a href="#projects" className="item-header">
            Proyectos
          </a>
          <a href="#contact" className="item-header">
            Contacto
          </a>
        </div>
        {/* </div> */}
      </div>
      <div className="block md:hidden text-pink-500 mt-8 mr-2">
        <button className="menu_burger" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <i className="fas fa-times" style={{ color: "#ec4899" }}></i>
          ) : (
            <i className="fas fa-bars" style={{ color: "#ec4899" }}></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
