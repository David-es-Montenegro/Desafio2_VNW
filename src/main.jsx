import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Estilos globais (se necessário)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);