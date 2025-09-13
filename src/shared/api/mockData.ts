// Mock данные для демонстрации приложения
export const mockNewsData = [
  {
    web_url: "https://example.com/news1",
    snippet: "Это пример новости для демонстрации работы приложения",
    headline: {
      main: "Пример заголовка новости 1",
      print_headline: "Пример заголовка новости 1"
    },
    pub_date: "2024-12-01T10:00:00Z",
    byline: {
      original: "By Example Author"
    },
    multimedia: [
      {
        url: "https://via.placeholder.com/300x200?text=News+Image",
        type: "image",
        subtype: "photo"
      }
    ],
    _id: "mock1",
    word_count: 150
  },
  {
    web_url: "https://example.com/news2",
    snippet: "Вторая примерная новость с интересным содержанием",
    headline: {
      main: "Пример заголовка новости 2",
      print_headline: "Пример заголовка новости 2"
    },
    pub_date: "2024-12-01T11:00:00Z",
    byline: {
      original: "By Another Author"
    },
    multimedia: [
      {
        url: "https://via.placeholder.com/300x200?text=News+Image+2",
        type: "image",
        subtype: "photo"
      }
    ],
    _id: "mock2",
    word_count: 200
  },
  {
    web_url: "https://example.com/news3",
    snippet: "Третья новость для демонстрации функциональности приложения",
    headline: {
      main: "Пример заголовка новости 3",
      print_headline: "Пример заголовка новости 3"
    },
    pub_date: "2024-12-01T12:00:00Z",
    byline: {
      original: "By Third Author"
    },
    multimedia: [
      {
        url: "https://via.placeholder.com/300x200?text=News+Image+3",
        type: "image",
        subtype: "photo"
      }
    ],
    _id: "mock3",
    word_count: 180
  }
];
