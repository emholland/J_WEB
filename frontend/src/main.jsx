import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Articles from './Pages/Articles'; // make sure path matches
import AuthorInfo from './Pages/AuthorInfo';
import ResourcePage from './Pages/Resources';
import './index.css'; // your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/authorinfo" element={<AuthorInfo />} />
        <Route path="/resources" element={<ResourcePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);