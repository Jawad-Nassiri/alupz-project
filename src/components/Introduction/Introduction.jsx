import "./Introduction.css";
import IntroductionBox from "./IntroductionBox/IntroductionBox";
import introduction1 from "../../images/introduction/portfolio-1.jpg";
import introduction2 from "../../images/introduction/portfolio-2.jpg";
import introduction3 from "../../images/introduction/portfolio-3.jpg";

export default function Introduction() {
  return (
    <div className="introduction-container">
      <div className="introduction-section">
        <div className="introduction-header">
          <div className="introduction-header__left">
            <h1 className="introduction-header__title">
              Innovative Projects Delivering Intelligent Solutions
            </h1>
          </div>
          <div className="introduction-header__right">
            <p className="introduction-header__text">
              Modern consumers heavily rely on digital platforms to research
              products before making purchasing decisions. Studies show that 51%
              of consumers use Google to research brands.
            </p>
          </div>
        </div>
        <div className="introduction-boxes-container">
          <IntroductionBox img={introduction1} title="AI Retails Optimization" />
          <IntroductionBox img={introduction2} title="AI Chatbot Integration" />
          <IntroductionBox img={introduction3} title="AI-Driven Marketing Analytics" />
        </div>
      </div>
    </div>
  );
}
