import React from 'react';
import classNames from 'classnames';
import { News } from '@/entities/news/model/types';
import { getDate, getImageUrl, formatDateForDisplay } from '@/shared/lib/utils';
import './NewsCard.scss';

interface NewsCardProps {
  news: News;
  prevDateDiff: boolean;
  nextDateDiff: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ 
  news, 
  prevDateDiff, 
  nextDateDiff 
}) => {
  const handleClick = () => {
    window.open(news.web_url, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="news-card" onClick={handleClick}>
      <img 
        className="news-card__image" 
        src={getImageUrl(news)} 
        alt={news.abstract}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/default-article-image.png';
        }}
      />
      <div className="news-card__content">
        <div className="news-card__source">{news.source}</div>
        <div className="news-card__title">{news.abstract}</div>
        <div className="news-card__date">{formatDate(news.pub_date)}</div>
      </div>
    </div>
  );
};
