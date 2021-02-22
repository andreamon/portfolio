import React from "react";

const Header = () => {
  return (
    <nav className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="block text-xl font-medium">Andrea Montaño</div>
        <div className="md:flex md:justify-end tracking-wide text-base font-medium">
          <a href="#"
            className="item-header"
            // activeClassName="menu_active"
          >
            Sobre mi
          </a>
          <a href="#"
            className="item-header"
            // activeClassName="menu_active"
          >
            Mi CV
          </a>
          <a href="#"
            className="item-header"
            // activeClassName="menu_active"
          >
            Proyectos
          </a>
          <a href="#"
            className="item-header"
            // activeClassName="menu_active"
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
