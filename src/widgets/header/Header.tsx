import React from 'react';
import './Header.scss';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="header__content">
        <button 
          className="header__burger"
          onClick={onMenuToggle}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <h1 className="header__title">BESIDER</h1>
        
        <div className="header__placeholder"></div>
      </div>
    </header>
  );
};
