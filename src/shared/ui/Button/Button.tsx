import React from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  return (
    <button
      className={classNames('button', `button--${variant}`, `button--${size}`, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
