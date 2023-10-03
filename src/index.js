import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './styles.css';
import { GalleryProvider } from 'context/GalleryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </React.StrictMode>
);
