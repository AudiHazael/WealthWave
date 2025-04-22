import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';  // <-- Import HelmetProvider
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'swiper/css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider> {/* <-- Wrap your App inside HelmetProvider */}
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);



