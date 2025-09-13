import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/login" className="footer__link">Log In</a>
        <a href="/about" className="footer__link">About Us</a>
        <a href="/publishers" className="footer__link">Publishers</a>
        <a href="/sitemap" className="footer__link">Sitemap</a>
      </div>
      <div className="footer__copyright">
        <span>Powered by</span>
        <span>© 2023 Besider. Inspired by Insider</span>
      </div>
    </footer>
  );
};
