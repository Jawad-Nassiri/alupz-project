import headerBanner from "../../images/header/header-banner.jpg";
import "./Header.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";

export default function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerBanner})` }}>
      <Nav />
      <Hero />
    </div>
  );
}
