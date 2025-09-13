import React from 'react';
import './Loading.scss';

export const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <div className="loading__dot"></div>
        <div className="loading__dot"></div>
        <div className="loading__dot"></div>
      </div>
    </div>
  );
};
