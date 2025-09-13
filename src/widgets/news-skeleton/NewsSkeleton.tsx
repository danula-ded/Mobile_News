import React from 'react';
import './NewsSkeleton.scss';

export const NewsSkeleton: React.FC = () => {
  return (
    <div className="news-skeleton">
      <div className="news-skeleton__item">
        <div className="news-skeleton__image"></div>
        <div className="news-skeleton__content">
          <div className="news-skeleton__source"></div>
          <div className="news-skeleton__title"></div>
          <div className="news-skeleton__title news-skeleton__title--short"></div>
          <div className="news-skeleton__date"></div>
        </div>
      </div>
    </div>
  );
};
