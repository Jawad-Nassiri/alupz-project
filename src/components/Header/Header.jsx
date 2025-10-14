import { useState } from 'react';
import headerBanner from "../../images/header/header-banner.jpg";
import "./Header.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header" style={{ backgroundImage: `url(${headerBanner})` }}>
      <FaBars className="header__menu-icon" onClick={() => setIsOpen(true)} />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
    </div>
  );
}
