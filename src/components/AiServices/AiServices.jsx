import "./AiServices.css";
import AiServiceBox from "./AiServiceBox/AiServiceBox";
import AiServiceFirstImg from "../../images/aiService/AI-Data-Analytics.jpg";
import AiServiceSecondImg from "../../images/aiService/AI-Development.jpg";
import AiServiceThirdImg from "../../images/aiService/AI-Design-Mystery-1.jpg";
import AiServiceFourthImg from "../../images/aiService/AI-Integration.jpg";
import AiServiceFifthImg from "../../images/aiService/AI-Chatbots.jpg";
import AiServiceSixthImg from "../../images/aiService/AI-Driven-Automation.jpg";

const aiServices = [
  { img: AiServiceFirstImg, title: "AI-Data Analytics", desc: "Stay ahead of the curve in-depth market analysis" },
  { img: AiServiceSecondImg, title: "AI-Development", desc: "Stay ahead of the curve in-depth market analysis" },
  { img: AiServiceThirdImg, title: "AI-Design Mystery", desc: "Stay ahead of the curve in-depth market analysis" },
  { img: AiServiceFourthImg, title: "AI-Integration", desc: "Stay ahead of the curve in-depth market analysis" },
  { img: AiServiceFifthImg, title: "AI-Chatbots", desc: "Stay ahead of the curve in-depth market analysis" },
  { img: AiServiceSixthImg, title: "AI-Driven Automation", desc: "Stay ahead of the curve in-depth market analysis" },
];

export default function AiServices() {
  return (
    <div className="AiServices-container">
      <div className="AiServices-header">
        <div className="AiServices-header__left">
          <h1 className="AiServices-header__title">
            Our Clients Receive the Highest Quality Service
          </h1>
          <p className="AiServices-header__text">
            Our consulting process begins with a thorough assessment of your
            current infrastructure, workflows, and pain points.
          </p>
        </div>
        <div className="AiServices-header__right">
          <a href="#" className="AiServices-header__link">
            Learn More
          </a>
        </div>
      </div>

      <div className="AiServices-boxes-container">
        {aiServices.map((service, index) => (
          <AiServiceBox
            key={index}
            img={service.img}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
}
