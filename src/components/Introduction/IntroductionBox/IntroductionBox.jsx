import "./IntroductionBox.css";

export default function IntroductionBox({ img, title }) {
  return (
    <div
      className="introduction-box"
      style={{ backgroundImage: `url(${img})` }}
      >
          <a href="#" className="introduction-box__title-link">{title}</a>
          <a href="#" className="introduction_box__link">AI Design</a>
    </div>
  );
}
