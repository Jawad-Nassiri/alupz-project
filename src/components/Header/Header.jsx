import headerBanner from "../../images/header-banner.jpg";
import "./Header.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerBanner})` }}>
      <Nav />
    </div>
  );
}
