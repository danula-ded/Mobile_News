import React from 'react';
import { News } from '@/entities/news/model/types';
import { NewsCard } from '@/widgets/news-card';
import { NewsSkeleton } from '@/widgets/news-skeleton';
import './NewsList.scss';

interface NewsListProps {
  newsList: News[];
  refNewsList: React.RefObject<HTMLDivElement | null>;
  loading?: boolean;
}

export const NewsList: React.FC<NewsListProps> = ({ newsList, refNewsList, loading = false }) => {
  if (loading) {
    return (
      <div className="news-list">
        {Array.from({ length: 5 }).map((_, index) => (
          <NewsSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="news-list">
      {newsList.map((news, index) => (
        <NewsCard
          key={`${news.web_url}-${news.pub_date}-${index}`}
          news={news}
          prevDateDiff={false}
          nextDateDiff={false}
        />
      ))}
    </div>
  );
};
