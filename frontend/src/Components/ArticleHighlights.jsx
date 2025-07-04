import './ArticleHighlights.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mantisLogo from '../assets/mantisLogo.png'; // use this in place of "moth.png"

export default function ArticleHighlights({ articles, gridTitle }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // dropdown initially open

  const [a1, a2, a3, a4] = articles;

  return (
    <div className="highlight-articles-container">
      <div className="highlight-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="highlight-dropdown-title">
          <span className="highlight-arrow">{isOpen ? '\u25BC' : '\u25B6'}</span> HIGHLIGHTS
        </h1>
        <img src={mantisLogo} alt="mantis illustration" className="mantis-head" />
      </div>

      {isOpen && (
        <main className="highlight-grid">
          {a1 && (
            <div className="highlight-card tall-left" onClick={() => navigate(`/articles/${a1.id}`)}>
              {a1.picture && <img src={a1.picture} alt={a1.title} className="article-image" />}
              <h2 className="highlight-title">{a1.title}</h2>
              <p className="highlight-author">By {a1.author}</p>
              <p className="highlight-content">
                  {a1.description.length > 200
                    ? `${a1.description.slice(0, 200)}...`
                    : a1.description}
              </p>
              <div className="highlight-tags">
                {a1.tags.map(tag => <span key={tag.id} className="highlight-tag">{tag.name}</span>)}
              </div>
            </div>
          )}

          {a2 && (
            <div className="highlight-card big-center" onClick={() => navigate(`/articles/${a2.id}`)}>
              {a2.picture && <img src={a2.picture} alt={a2.title} className="article-image" />}
              <h2 className="highlight-title">{a2.title}</h2>
              <p className="highlight-author">By {a2.author}</p>
               <p className="highlight-content">
                  {a2.description.length > 200
                    ? `${a2.description.slice(0, 200)}...`
                    : a2.description}
              </p>
              <div className="highlight-tags">
                {a2.tags.map(tag => <span key={tag.id} className="highlight-tag">{tag.name}</span>)}
              </div>
            </div>
          )}

          {a3 && (
            <div className="highlight-card small small-right-top" onClick={() => navigate(`/articles/${a3.id}`)}>
              <div className="small-card-top">
                {a3.picture && <img src={a3.picture} alt={a3.title} className="article-image small" />}
                <h2 className="highlight-title">{a3.title}</h2>                
              </div>
              <p className="highlight-author">By {a3.author}</p>
               <p className="highlight-content">
                  {a3.description.length > 200
                    ? `${a3.description.slice(0, 200)}...`
                    : a3.description}
              </p>
              <div className="highlight-tags">
                {a3.tags.map(tag => <span key={tag.id} className="highlight-tag">{tag.name}</span>)}
              </div>
            </div>
          )}

          {a4 && (
            <div className="highlight-card small small-right-bottom" onClick={() => navigate(`/articles/${a4.id}`)}>
              <div className="small-card-top">
                {a4.picture && <img src={a4.picture} alt={a4.title} className="article-image small" />}
                <h2 className="highlight-title">{a4.title}</h2>
              </div>
              <p className="highlight-author">By {a4.author}</p>
               <p className="highlight-content">
                  {a4.description.length > 200
                    ? `${a4.description.slice(0, 200)}...`
                    : a4.description}
              </p>
              <div className="highlight-tags">
                {a4.tags.map(tag => <span key={tag.id} className="highlight-tag">{tag.name}</span>)}
              </div>
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
