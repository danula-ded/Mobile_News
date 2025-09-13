import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { News, NewsState, NewsPayload } from './types';
import { newsApi } from '../api/newsApi';
import { createDateInUTC, getDateInUTC } from '@/shared/lib/utils';

const initialState: NewsState = {
  news: {},
  loading: false,
  error: null,
  currentDate: createDateInUTC(2024, 12, 31).toISOString(), // 31 декабря 2024 в UTC как строка
  loadedDays: [],
  hasMoreData: true,
};

export const fetchNewsForDay = createAsyncThunk<
  News[],
  NewsPayload,
  { rejectValue: string; state: { news: NewsState } }
>('news/fetchNewsForDay', async (payload, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const dateKey = getDateInUTC(payload.date);
    
    // Проверяем, не загружен ли уже этот день
    if (state.news.loadedDays.includes(dateKey)) {
      return [];
    }
    
    const news = await newsApi.getNewsForDate(payload.date);
    return news;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
});

export const updateCurrentNews = createAsyncThunk<
  News[],
  void,
  { rejectValue: string; state: { news: NewsState } }
>('news/updateCurrentNews', async (_, { rejectWithValue }) => {
  try {
    const today = new Date();
    
    // Загружаем только новости за сегодня
    const fetchedNews = await newsApi.getNewsForDate(today);
    
    return fetchedNews;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    loadPreviousDay: (state) => {
      // Переходим к предыдущему дню в UTC
      const newDate = new Date(state.currentDate);
      newDate.setUTCDate(newDate.getUTCDate() - 1);
      state.currentDate = newDate.toISOString();
      
      // Проверяем, есть ли еще данные для загрузки (загружаем до 2020 года)
      state.hasMoreData = newDate.getUTCFullYear() > 2020;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsForDay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsForDay.fulfilled, (state, action) => {
        state.loading = false;
        
        if (action.payload.length > 0) {
          // Используем дату из payload в UTC
          const dateKey = getDateInUTC(action.meta.arg.date);
          
          // Добавляем новости за конкретный день
          if (!state.news[dateKey]) {
            state.news[dateKey] = [];
          }
          
          // Фильтруем дубликаты по web_url
          const existingUrls = new Set(state.news[dateKey].map(item => item.web_url));
          const newNews = action.payload.filter(item => !existingUrls.has(item.web_url));
          
          state.news[dateKey] = [...state.news[dateKey], ...newNews];
          
          // Отмечаем день как загруженный
          if (!state.loadedDays.includes(dateKey)) {
            state.loadedDays.push(dateKey);
          }
        }
        
        // Переходим к предыдущему дню только после успешной загрузки
        const newDate = new Date(state.currentDate);
        newDate.setUTCDate(newDate.getUTCDate() - 1);
        state.currentDate = newDate.toISOString();
        
        // Проверяем, есть ли еще данные для загрузки (загружаем до 2020 года)
        state.hasMoreData = newDate.getFullYear() > 2020;
      })
      .addCase(fetchNewsForDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      })
      .addCase(updateCurrentNews.pending, (state) => {
        state.error = null;
      })
      .addCase(updateCurrentNews.fulfilled, (state, action) => {
        if (!action.payload.length) {
          return;
        }

        const todayKey = new Date().toISOString().split('T')[0];
        
        // Добавляем новые новости в начало
        if (!state.news[todayKey]) {
          state.news[todayKey] = [];
        }

        // Фильтруем дубликаты
        const existingUrls = new Set(state.news[todayKey].map(item => item.web_url));
        const newNews = action.payload.filter(item => !existingUrls.has(item.web_url));

        state.news[todayKey] = [
          ...newNews,
          ...state.news[todayKey],
        ];
      })
      .addCase(updateCurrentNews.rejected, (state, action) => {
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { clearError, loadPreviousDay } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
