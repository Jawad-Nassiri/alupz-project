import "./Nav.css";
import logo from "../../../images/white-logo.png";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Nav({isOpen, setIsOpen }) {
  return (
    <div className={`container ${isOpen ? "active" : ""}`}>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <ul className="nav-list">
            <li className="nav-item__x-icon" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Content
              </a>
            </li>
          </ul>
        </div>
        <div className="search">
          <div className="search-icon">
            <a href="#" className="search-icon__link">
              <FaSearch />
            </a>
          </div>
          <div className="see-more">
            <a href="#" className="see-more--link">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
