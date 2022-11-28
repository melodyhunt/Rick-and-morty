import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-fondo">
      <img src={Logo} alt="logo" className="w-64 py-1 ml-8" />
    </header>
  );
};

export default Navbar;
