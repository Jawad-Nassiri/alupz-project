import "./ContactUs.css";
import InputBox from "./InputBox/InputBox";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__section">
        <div className="contact-us__left">
          <form action="#" className="contact-us__form">
            <div className="contact-us__form-header">
              <h1 className="contact-us__form-title">Have Any Questions</h1>
              <span className="contact-us__form-subtitle">
                Feel free to contact us through anywhere.
              </span>
            </div>

            <div className="contact-us__form-body">
              <div className="contact-us__inputs">
                <div className="contact-us__inputs-left">
                  <InputBox placeholder="Your Name" />
                  <InputBox placeholder="Your Phone" />
                </div>
                <div className="contact-us__inputs-right">
                  <InputBox placeholder="Your Email" />
                  <InputBox placeholder="Your Address" />
                </div>
              </div>
              <div className="contact-us__textarea">
                <textarea
                  className="contact-us__textarea-input"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              <div className="contact-us__button-wrapper">
                <button type="submit" className="contact-us__button">
                  submit now
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-us__right">
          <h1 className="contact-us__title">
            Contact Us Let’s Talk Your Any Query.
          </h1>
          <span className="contact-us__text">
            With Sotech, we’ve decided to change course, embarking on a journey
            to design our own aluminium systems. Leveraging cutting-edge CNC
            manufacturing techniques, we aim to create systems that push
            boundaries.
          </span>
          <span className="contact-us__phone">
            Or You may Call Us For Appointment:  +01 000 321 11
          </span>

          <span className="contact-us__info">
            We collaborated with 150+ new start-up
          </span>
        </div>
      </div>
    </div>
  );
}
