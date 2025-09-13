import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainPage } from '@/pages/main-page';
import './App.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router basename="/Mobile_News">
        <div className="app">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
