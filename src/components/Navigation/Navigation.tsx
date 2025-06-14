import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Rick-Morty.png";
import { AuthStatus } from "../AuthStatus/AuthStatus";

export const Navigation: React.FC = () => {
  return (
    <div className="navbar">
      <div className="header">
        <NavLink to="/">
          <img src={Logo} alt="Logo" width={150} />
        </NavLink>
        <NavLink to="/categories/character">Characters</NavLink>
        <NavLink to="/categories/location">Locations</NavLink>
        <NavLink to="/categories/episode">Episodes</NavLink>
        <AuthStatus />
      </div>
    </div>
  );
};
