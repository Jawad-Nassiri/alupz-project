import headerBanner from "../../images/header/header-banner.jpg";
import headerSubBanner from "../../images/header/header-subbanner.jpg";
import "./Header.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerBanner})` }}>

      <Nav />
      <div className="hero">
        <h1 className="title">Come to</h1>

        <div className="subtitle">
          <img src={headerSubBanner} alt="AI" />
          <h1>
            The world of <span>AI</span>
          </h1>
        </div>
      </div>

    </div>
  );
}
