import "./Testimonials.css";
import TestimonialBox from "./TestimonialBox/TestimonialBox";
import banner from "../../images/testimonial/testimonial-banner.jpg";
import profile1 from "../../images/testimonial/people/profile1.png";
import profile2 from "../../images/testimonial/people/profile2.png";
import profile3 from "../../images/testimonial/people/profile3.webp";

export default function Testimonials() {
  return (
    <div
      className="testimonials-container"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="testimonials-section">
        <h1 className="testimonials-section__title">
          What They Are Talking About Agency
        </h1>

        <div className="testimonial-box-container">
          <TestimonialBox
            profileImg={profile1}
            profileJob="Web Designer"
            profileName="MD.Kowsar"
            text="IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction	"
          />

          <TestimonialBox
            profileImg={profile2}
            profileJob="Web Developer"
            profileName="John.Rice"
            text="IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction	"
          />

          <TestimonialBox
            profileImg={profile3}
            profileJob="CO Founder"
            profileName="Leo.Omar"
            text="IT Solutions excels with comprehensive services, user-friendly website, and dedication to customer satisfaction	"
          />
        </div>

      </div>
    </div>
  );
}						
