import "./Hero.css";
import headerSubBanner from "../../../images/header/header-subbanner.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="title">Come to</h1>

      <div className="subtitle">
        <img src={headerSubBanner} alt="AI" />
        <h1>
          The world of <span>AI</span>
        </h1>
      </div>
    </div>
  );
}
