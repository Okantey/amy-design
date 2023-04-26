import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[10%] py-6">
      <div className="logo__container">
        <img src={logo} alt="amy-logo" className="w-10" />
      </div>
      <div className="consultation">
        <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
          Free Consultation
        </button>
      </div>
    </header>
  );
};

export default Header;
