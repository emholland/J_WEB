import './ArticleHighlights.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mantisLogo from '../assets/mantisLogo.png'; // or any other mascot image
import { apiUrl } from '../api'; // Adjust the import based on your project structure

export default function BookReviewHighlights({ reviews, gridTitle = "HIGHLIGHTS" }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const [b1, b2, b3, b4] = reviews;

  return (
    <div className="highlight-articles-container">
      <div className="highlight-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="highlight-dropdown-title">
          <span className="highlight-arrow">{isOpen ? '▼' : '▶'}</span> {gridTitle}
        </h1>
        <img src={mantisLogo} alt="mantis illustration" className="mantis-head" />
      </div>

      {isOpen && (
        <main className="highlight-grid">
          {b1 && (
            <div className="highlight-card tall-left" onClick={() => navigate(`/book-reviews/${b1.id}`)}>
              {b1.picture && <img src={apiUrl(b1.picture)} alt={b1.title} className="article-image" />}
              <h2 className="highlight-title">{b1.title}</h2>
              <p className="highlight-content">
                {b1.description.length > 200
                  ? `${b1.description.slice(0, 200)}...`
                  : b1.description}
              </p>
             
            </div>
          )}

          {b2 && (
            <div className="highlight-card big-center" onClick={() => navigate(`/book-reviews/${b2.id}`)}>
              {b2.picture && <img src={apiUrl(b2.picture)} alt={b2.title} className="article-image" />}
              <h2 className="highlight-title">{b2.title}</h2>
              <p className="highlight-content">
                {b2.description.length > 200
                  ? `${b2.description.slice(0, 200)}...`
                  : b2.description}
              </p>
              
            </div>
          )}

          {b3 && (
            <div className="highlight-card small small-right-top" onClick={() => navigate(`/book-reviews/${b3.id}`)}>
              <div className="small-card-top">
                {b3.picture && <img ssrc={apiUrl(b3.picture)} alt={b3.title} className="article-image small" />}
                <h2 className="highlight-title">{b3.title}</h2>
              </div>
              <p className="highlight-content">
                {b3.description.length > 200
                  ? `${b3.description.slice(0, 200)}...`
                  : b3.description}
              </p>
             
            </div>
          )}

          {b4 && (
            <div className="highlight-card small small-right-bottom" onClick={() => navigate(`/book-reviews/${b4.id}`)}>
              <div className="small-card-top">
                {b4.picture && <img src={apiUrl(b4.picture)} alt={b4.title} className="article-image small" />}
                <h2 className="highlight-title">{b4.title}</h2>
              </div>
              <p className="highlight-content">
                {b4.description.length > 200
                  ? `${b4.description.slice(0, 200)}...`
                  : b4.description}
              </p>
             
            </div>
          )}
        </main>
      )}

      <div className="highlight-border-container">
        <div className="highlight-articles-border"></div>
      </div>
    </div>
  );
}
