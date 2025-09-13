import React from 'react';
import classNames from 'classnames';
import './SideMenu.scss';

interface NavItem {
  id: number;
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { id: 1, name: 'SCIENCE', link: '/science' },
  { id: 2, name: 'GENERAL', link: '/general' },
  { id: 3, name: 'ENTERTAINMENT', link: '/entertainment' },
  { id: 4, name: 'TECHNOLOGY', link: '/technology' },
  { id: 5, name: 'BUSINESS', link: '/business' },
  { id: 6, name: 'HEALTH', link: '/health' },
  { id: 7, name: 'SPORTS', link: '/sports' },
];

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const handleNavClick = () => {
    onClose();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div className={classNames('side-menu', { 'side-menu--open': isOpen })}>
      <div className="side-menu__overlay" onClick={handleOverlayClick}></div>
      <div className="side-menu__content">
        <div className="side-menu__header">
          <button 
            className="side-menu__close"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            ×
          </button>
        </div>
        
        <nav className="side-menu__nav">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              className="side-menu__nav-item"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
