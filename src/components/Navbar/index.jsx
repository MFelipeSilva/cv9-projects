import { useState } from "react";

import { Link } from "react-scroll";

import { PrimaryButton } from "../Button";

import { CloseIcon, MenuIcon } from "../Icons";

import logo from "../../assets/logo.png";

import "./style.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="nav-container">
        <img src={logo} alt="Logo" />
        <nav className={`nav-content ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="sobre-nos" spy={true} smooth={true} offset={0} duration={500}>
                Sobre a CV9
              </Link>
            </li>
            <li>
              <Link to="serviços" spy={true} smooth={true} offset={-150} duration={500}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="equipe" spy={true} smooth={true} offset={0} duration={500}>
                Equipe
              </Link>
            </li>
            <li>
              <Link to="empresas" spy={true} smooth={true} offset={0} duration={500}>
                Empresas
              </Link>
            </li>
            <li>
              <Link to="atendimento" spy={true} smooth={true} offset={0} duration={500}>
                Atendimento
              </Link>
            </li>
            <PrimaryButton size="large" icon={false}>
              Peça um orçamento
            </PrimaryButton>
          </ul>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};
