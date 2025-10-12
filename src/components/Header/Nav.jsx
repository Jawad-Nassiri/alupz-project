import "./Nav.css";
import logo from '../../images/white-logo.png';
import { FaSearch } from 'react-icons/fa';

export default function Nav() {
  return (
    <div className="container">
          <div className="nav">
              <div className="logo">
                  <img src={logo} alt="logo" />
              </div>
              <div className="list">
                  <ul className="nav-list">
                      <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Pages</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Content</a></li>
                  </ul>
              </div>
              <div className="search">
                  <div className="search-icon">
                      <a href="#" className="search-icon__link"><FaSearch/></a>
                  </div>
                  <div className="see-more">
                      <a href="#" className="see-more--link">See More</a>
                  </div>
              </div>
      </div>
    </div>
  );
}
