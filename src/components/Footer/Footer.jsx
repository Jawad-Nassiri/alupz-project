import "./Footer.css";
import logo from "../../images/white-logo.png";
import footer1 from "../../images/footer/footer1.jpg";
import footer2 from "../../images/footer/footer2.jpg";
import footer3 from "../../images/footer/footer3.jpg";
import footer4 from "../../images/footer/footer4.jpg";
import footer5 from "../../images/footer/footer5.jpg";
import footer6 from "../../images/footer/footer6.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-about-us">
          <div className="footer-about-us__box">
            <img src={logo} alt="logo" className="footer-about-us__logo" />
          </div>
          <div className="footer-about-us__info">
            <h2 className="footer-about-us__title">About us</h2>
            <span className="footer-about-us__text">
              Setting the standard in air freight. Our global network has the
              power to help businesses grow
            </span>
          </div>
          <div className="footer-about-us__social-media">
            <a href="#" className="footer-about-us__icon">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-about-us__icon">
              <FaTwitter />
            </a>
            <a href="#" className="footer-about-us__icon">
              <FaYoutube />
            </a>
            <a href="#" className="footer-about-us__icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-useful-likes">
          <ul className="footer-useful-likes_list">
            <li className="footer-useful-likes__item">
              <h2 className="footer-useful-likes__title">Useful Links</h2>
            </li>

            <li className="footer-useful-likes__item">
              <a href="#" className="footer-useful-likes__link">
                About
              </a>
            </li>

            <li className="footer-useful-likes__item">
              <a href="#" className="footer-useful-likes__link">
                Meet Team
              </a>
            </li>

            <li className="footer-useful-likes__item">
              <a href="#" className="footer-useful-likes__link">
                News & Mobile
              </a>
            </li>

            <li className="footer-useful-likes__item">
              <a href="#" className="footer-useful-likes__link">
                Our Projects
              </a>
            </li>

            <li className="footer-useful-likes__item">
              <a href="#" className="footer-useful-likes__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <div className="footer-contact__title_container">
            <h2 className="footer-contact__title">Contact</h2>
          </div>
          <div className="footer-contact__location">
            <FaMapMarkerAlt className="footer-contact__location-icon" />
            <span className="footer-contact__location-address">
              66 Road Broklyn Str 600 New York, USA
            </span>
          </div>
          <div className="footer-contact__email">
            <FaEnvelope className="footer-contact__email-icon" />
            <span className="footer-email__address">Example@Gmail.com</span>
          </div>
          <div className="footer-contact__phone">
            <FaPhone className="footer-contact__phone-icon" />
            <span className="footer-phone__number">+92 666 888 0000</span>
          </div>
        </div>

        <div className="footer-gallery">
          <div className="footer-gallery__title-container">
            <h2 className="footer-gallery__title">Gallery</h2>
          </div>
          <div className="footer-gallery__photos">
            <img src={footer1} alt="footer" className="footer-gallery__img" />
            <img src={footer2} alt="footer" className="footer-gallery__img" />
            <img src={footer3} alt="footer" className="footer-gallery__img" />
            <img src={footer4} alt="footer" className="footer-gallery__img" />
            <img src={footer5} alt="footer" className="footer-gallery__img" />
            <img src={footer6} alt="footer" className="footer-gallery__img" />
          </div>
        </div>
          </div>
          
          <div className="footer-copyright">
              <span className="footer-copyright__text">© 2025 All Rights Reserved</span>
          </div>
    </div>
  );
}
