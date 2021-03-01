import React from "react";

const Header = () => {
  return (
    <nav className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="block text-xl font-semibold">Andrea Montaño</div>
        <div className="md:flex md:justify-end tracking-wide text-base font-medium">
          <a href="#about-me"
            className="item-header"
          >
            Sobre mi
          </a>
          <a href="#resume"
            className="item-header"
          >
            Mi CV
          </a>
          <a href="#projects"
            className="item-header"
          >
            Proyectos
          </a>
          <a href="#contact"
            className="item-header"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
    //   <div className="block md:hidden text-indigo-400 mt-8 mr-2">
    //     <button className="menu_burger" onClick={() => setOpenMenu(!openMenu)}>
    //       {openMenu ? (
    //         <i className="fas fa-times" style={{ color: "#818CF8" }}></i>
    //       ) : (
    //         <i className="fas fa-bars" style={{ color: "#818CF8" }}></i>
    //       )}
    //     </button>
    //   </div>
  );
};

export default Header;
