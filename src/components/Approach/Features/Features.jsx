import "./Features.css";

export default function Features({ img, title, text }) {
  return (
    <div className="features-box">
      <img src={img} alt="feature" className="features-box__img" />
      <div className="features-box__text">
        <h2 className="features-box__title">{title}</h2>
        <p className="features-box__desc">{text}</p>
      </div>
    </div>
  );
}
