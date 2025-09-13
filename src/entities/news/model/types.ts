export interface News {
  abstract: string;
  web_url: string;
  pub_date: string;
  source: string;
  multimedia: {
    url: string;
    crop_name: string;
  }[];
}

export interface NewsResponse {
  response: {
    docs: News[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export interface NewsState {
  news: { [key: string]: News[] };
  loading: boolean;
  error: string | null;
  currentDate: string; // Храним как строку в ISO формате
  loadedDays: string[];
  hasMoreData: boolean;
}

export interface NewsPayload {
  date: Date;
}
