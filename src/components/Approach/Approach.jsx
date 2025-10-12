import "./Approach.css";
import aboutUs from "../../images/approach/about-us-1.jpg";
import feature1 from "../../images/approach/data-modelling.png";
import feature2 from "../../images/approach/monitor.png";
import Features from "./Features/Features";

export default function Approach() {
  return (
    <div className="approach-container">
      <div className="approach-section">
        <div className="approach-section__left">
          <h1 className="approach-section__title">
            Leveraging AI to solve real-world challenges, our team blends
            creativity, expertise, and strategy to drive innovation and growth.
          </h1>
          <div className="features-container">
            <Features
              img={feature1}
              title="Data Evaluation and Intelligence"
              text="Developing a comprehensive IT solution strategy that aligns with programming."
            />
            <Features
              img={feature2}
              title="Analytics and Business Insights"
              text="Developing a comprehensive IT solution strategy that aligns with programming."
            />
          </div>
        </div>
        <div className="approach-section__right">
          <div className="approach-section__right-img-box">
            <img
              src={aboutUs}
              alt="about us"
              className="approach-section__right_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
