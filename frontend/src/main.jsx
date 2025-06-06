import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeT from './Pages/HomeT'; // if you want to use the Home2 component
import Articles from './Pages/Articles'; // make sure path matches
import Author from './Pages/Author';
import ResourcePage from './Pages/Resources';
import ArticlePage from './Pages/ArticlePage';
import Contact from './Pages/Contact'; 
import BookReviews from './Pages/BookReviews';
import './index.css'; // your global styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeT />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/author" element={<Author />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-reviews" element={<BookReviews />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);