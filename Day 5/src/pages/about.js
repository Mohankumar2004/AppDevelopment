import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
const AboutPage = () => {
    return (
        <footer>
          <div className="footer-content">
            <div className="footer-sectiona">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="/about">Learn more</Link>
            </div>
            <div className="footer-sectionb">
              <h2>Contact Us</h2>
              <p>If you have any questions, feel free to get in touch with us.</p>
              <Link to="/contact">Contact now</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          </div>
        </footer>
      );
}
export default AboutPage;