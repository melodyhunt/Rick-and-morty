import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-black">
      <img src={Logo} alt="logo" className="w-64 ml-8 py-1" />
    </header>
  );
};

export default Navbar;
