// src/components/Footer.jsx
import React from 'react';
import './footer.css'; // Make sure to style your footer in a separate CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="border-Contact"></div>
     
        <p>Feel free to reach out to me on my social media, through my GitHub profile or LinkedIn.</p>
        <div className="social-links">
        <a href="https://www.instagram.com/tayfunn.deniz/?igsh=b293aXJlN2ppZzdq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-instagram"></i> Instagram
</a>
<a href="https://github.com/Falconul" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-github"></i> GitHub
</a>
<a href="https://www.linkedin.com/in/tayfun-deniz-32796b29b/" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-linkedin"></i> LinkedIn
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
