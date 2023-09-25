import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <Link to="/privacy">  <h3>Privacy Policy</h3></Link>
        </div>
        <div className="footer-section"><Link to="/terms"><h3>Terms & Conditions</h3></Link>
        </div>
        <div className="footer-section">
          <Link to="/contact"><h3>Contact Info</h3></Link>
        </div>
        <div className="footer-section">
          <Link to="/faq"><h3>FAQs</h3></Link>
        </div>
        
        <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
        <a href="https://twitter.com/" target="_blank">
        <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
            <WhatsAppIcon />
            </a>
            </div>
            </div>
      </div>
    </footer>
  );
}

export default Footer;