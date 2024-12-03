// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct modern API
import { Provider } from 'react-redux';
import { store } from './store'; // Import the Redux store
import App from './App'; // Main application component

const container = document.getElementById('root');
const root = createRoot(container); // Use React 18's createRoot API

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
