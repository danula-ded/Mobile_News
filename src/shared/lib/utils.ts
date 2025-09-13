import { News } from '@/entities/news/model/types';
import { API_CONFIG } from '@/shared/api/config';

export const getImageUrl = (news: News): string => {
  if (news.multimedia && news.multimedia.length > 0) {
    const image = news.multimedia.find(
      (item) => item.crop_name === 'thumbStandard'
    );
    if (image) {
      return `${API_CONFIG.STATIC_URL}${image.url}`;
    }
  }
  return '/default-article-image.png';
};

export const getDate = (date: string): string => {
  const newsDate = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - newsDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return 'Вчера';
  } else if (diffDays === 0) {
    return 'Сегодня';
  } else if (diffDays < 7) {
    return `${diffDays} дней назад`;
  } else {
    return newsDate.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
};

export const isDateDifferent = (date1: string, date2: string): boolean => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getDate() !== d2.getDate() ||
    d1.getMonth() !== d2.getMonth() ||
    d1.getFullYear() !== d2.getFullYear()
  );
};

export const formatDateForDisplay = (date: string): string => {
  return new Date(date).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

// Функции для работы с часовыми поясами
export const getDateInUTC = (date: Date): string => {
  // Приводим дату к UTC для консистентности
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
};

export const createDateInUTC = (year: number, month: number, day: number): Date => {
  // Создаем дату в UTC, чтобы избежать проблем с часовыми поясами
  return new Date(Date.UTC(year, month - 1, day));
};

export const formatDateForNews = (date: Date): string => {
  // Форматируем дату для отображения в новостях
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
