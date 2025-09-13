// Альтернативное решение с CORS прокси
export const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const getCorsUrl = (url: string): string => {
  return `${CORS_PROXY}${url}`;
};
