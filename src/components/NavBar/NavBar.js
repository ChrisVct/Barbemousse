import "./NavBar.scss";
import Logo from "../../Assests/logoFondGris.svg";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      setToggleMenu(false);
    };
    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);
  return (
    <>
      {(toggleMenu || largeur > 900) && (
        <nav onClick={toggleNav}>
          <li>
            <a href="#notreHistoire" className="navLink">
              Notre Histoire
            </a>
          </li>
          <li>
            <a href="#laBrasserie" className="navLink">
              La Brasserie
            </a>
          </li>
          <li>
            <a href="#nosBieres" className="navLink">
              Nos Bières
            </a>
          </li>
          <li>
            <a href="#top">
              <img href="#top" className="navLink logo" src={Logo} alt="" />
            </a>
          </li>
          <li>
            <a href="#fbSection" className="navLink">
              Actualités
            </a>
          </li>
          <li>
            <a href="#map" className="navLink">
              Points De Vente
            </a>
          </li>
          <li>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </li>
        </nav>
      )}
      {!toggleMenu && largeur < 900 && (
        <nav>
          <li>
            <img className="navLink logo" src={Logo} alt="" />
          </li>
        </nav>
      )}
      <i
        onClick={toggleNav}
        className="fa-solid fa-bars displayNavBtn"
        alt=""
      ></i>
    </>
  );
}
