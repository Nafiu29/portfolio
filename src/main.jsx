import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PersonalProvider from './context/PersonalProvider.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonalProvider>
        <App />
      </PersonalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
