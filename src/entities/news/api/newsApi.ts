import axios from 'axios';
import { News, NewsResponse } from '../model/types';
import { API_ENDPOINTS } from '@/shared/api/config';
import { mockNewsData } from '@/shared/api/mockData';

export const newsApi = {
  async getNewsForDate(date: Date): Promise<News[]> {
    try {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      
      const response = await axios.get<NewsResponse>(
        API_ENDPOINTS.NEWS(year, month),
        {
          timeout: 10000,
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: Server error`);
      }

      if (!response.data?.response?.docs) {
        throw new Error('Invalid response format');
      }

      // Фильтруем новости по конкретной дате
      const targetDate = date.toISOString().split('T')[0];
      const dayNews = response.data.response.docs.filter(news => 
        news.pub_date.startsWith(targetDate)
      );

      return dayNews;
    } catch (error) {
      console.warn('API Error, using mock data:', error);
      
      // Возвращаем mock данные в случае ошибки
      return mockNewsData.map((item, index) => ({
        ...item,
        _id: `${date.toISOString().split('T')[0]}-mock-${index}`,
        pub_date: date.toISOString(),
        abstract: '',
        source: 'The New York Times',
        multimedia: item.multimedia.map(media => ({
          url: media.url,
          crop_name: 'thumbStandard'
        }))
      }));
    }
  }
};
