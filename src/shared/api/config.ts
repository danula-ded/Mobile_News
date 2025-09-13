// Используем прокси для обхода CORS
const USE_PROXY = true;

export const API_CONFIG = {
  BASE_URL: USE_PROXY ? '/api/svc/archive/v1' : 'https://api.nytimes.com/svc/archive/v1',
  API_KEY: import.meta.env.VITE_NYT_API_KEY || 'GGGhhmrt3fYco6gwoPGVYZ56diJbK5z9',
  STATIC_URL: 'https://static01.nyt.com/',
} as const;

export const API_ENDPOINTS = {
  NEWS: (year: number, month: number) => 
    `${API_CONFIG.BASE_URL}/${year}/${month}.json?api-key=${API_CONFIG.API_KEY}`,
} as const;
