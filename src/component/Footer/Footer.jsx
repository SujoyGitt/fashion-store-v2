import React from 'react'
import  "./Footer.css";
import GamepadIcon from '@mui/icons-material/Gamepad';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
  <div className="footer-cta container">
    <div className="footer-cta-left">
      <h4>Ready to get started?</h4>
      <p>Talk to us today</p>
    </div>
    <div className="footer-cta-right">
      <button className="footer-btn">Get Started</button>
    </div>
  </div>

  <footer className="footer container">
    <div className="footer-col">
      <h5>Sujoy Ghosal</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="footer-col">
      <h5>Subscribe</h5>
      <p>Get important updates</p>
      <div className="footer-input">
        <input type="email" placeholder="Your E-mail" />
        <button className="footer-btn small">Subscribe</button>
      </div>
    </div>

    <div className="footer-col">
      <h5>Follow Us</h5>
      <div className="footer-social">
        <a href="/"><GamepadIcon /></a>
        <a href="/"><InstagramIcon /></a>
        <a href="/"><YouTubeIcon /></a>
      </div>
    </div>

    <div className="footer-col">
      <h5>Call Us</h5>
      <a href="tel:9064171925" className="footer-phone">+91 9064171925</a>
    </div>
  </footer>

  <hr className="footer-divider" />

  <div className="footer-bottom container">
    <p>© {new Date().getFullYear()} Sujoy Ghosal. All rights reserved.</p>
    <div className="footer-links">
      <a href="/">Privacy Policy</a>
      <a href="/">Terms & Conditions</a>
    </div>
  </div>
</div>

  )
}
