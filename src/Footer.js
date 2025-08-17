import React from 'react';
import './Footer.css'; // Import your CSS here

function Footer() {
  return (
    <div className="footer">
      <div className="info-section">
        <div className="team-info">
          <h2>Team Members</h2>
          <ul>
            <li>Name 1</li>
            <li>Name 2</li>
            <li>Name 3</li>
            <li>Name 4</li>
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <li>Email: example@example.com</li>
          <li>Phone: +1 123 456 7890</li>
        </div>
      </div>
      <div className="footer-img">
        <img src="footer.png" alt="Footer Image" />
      </div>
    </div>
  );
}

export default Footer;
