import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchNewsForDay, updateCurrentNews, clearError } from '@/entities/news/model/newsSlice';
import { Header } from '@/widgets/header';
import { SideMenu } from '@/widgets/side-menu';
import { NewsList } from '@/widgets/news-list';
import { Loading } from '@/widgets/loading';
import { Footer } from '@/widgets/footer';
import { formatDateForNews } from '@/shared/lib/utils';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const refNewsList = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { news, loading, currentDate, hasMoreData, error } = useAppSelector((state) => state.news);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loadMoreNewsDay = useCallback(() => {
    if (hasMoreData && !loading) {
      dispatch(fetchNewsForDay({ date: new Date(currentDate) }));
    }
  }, [dispatch, currentDate, hasMoreData, loading]);

  const handleScroll = useCallback(() => {
    if (refNewsList.current) {
      const { scrollTop, scrollHeight, clientHeight } = refNewsList.current;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreNewsDay();
      }
    }
  }, [loadMoreNewsDay]);

  useEffect(() => {
    const element = refNewsList.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Также слушаем скролл окна для мобильных устройств
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreNewsDay();
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [loadMoreNewsDay]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCurrentNews());
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(news).length === 0) {
      loadMoreNewsDay();
    }
  }, [loadMoreNewsDay, news]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 10000); // Уменьшил время показа ошибки
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  // Обработка ошибок API
  useEffect(() => {
    const handleApiError = () => {
      // Можно добавить дополнительную логику обработки ошибок
    };

    window.addEventListener('unhandledrejection', handleApiError);
    return () => window.removeEventListener('unhandledrejection', handleApiError);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="main-page">
      <Header onMenuToggle={handleMenuToggle} />
      <SideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      
      {error && (
        <div className="main-page__error">
          <p>Ошибка загрузки: {error}</p>
        </div>
      )}

                  <div className="main-page__content" ref={refNewsList}>
                    {Object.keys(news).length > 0 && 
                      Object.keys(news)
                        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) // Сортируем по дате (новые сверху)
                        .map((key, idx) => {
                          const date = new Date(key + 'T00:00:00.000Z'); // Приводим к UTC
                          const formattedDate = formatDateForNews(date);
                          
                          return (
                            <div key={`${key}-${idx}`} className="news-date-section">
                              <h3 className="news-date-title">
                                News for {formattedDate}
                              </h3>
                              <NewsList
                                newsList={[...news[key]].sort((a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime())}
                                loading={loading}
                              />
                            </div>
                          );
                        })
                    }
        
        {loading && <Loading />}
        
        {!hasMoreData && Object.keys(news).length > 0 && (
          <div className="no-more-news">
            <p>Больше новостей нет</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};