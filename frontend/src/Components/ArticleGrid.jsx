// ArticleGrid.jsx
import React from 'react';
import './ArticleGrid.css';

const sizePattern = ['card-large', 'card-medium', 'card-small', 'card-medium', 'card-small'];

export default function ArticleGrid({ articles, gridTitle }) {
  return (
    <div className="tagged-articles-grid">
      {gridTitle && (
        <div className="page-name">
          <h1 className="site-title">{gridTitle}</h1>
        </div>
      )}

      <main className="highlight-grid">
       {articles.map((article, index) => {
        const sizeClass = sizePattern[index % sizePattern.length];
        return (
            <div key={article.id} className={`highlight-card ${sizeClass}`}>
            {article.picture && (
                <img src={article.picture} alt={article.title} className="article-image" />
            )}
            <h2 className="highlight-title">{article.title}</h2>
            <p className="highlight-content">{article.description}</p>
            <div className="highlight-tags">
                {article.tags.map(tag => (
                <span key={tag.id} className="highlight-tag">{tag.name}</span>
                ))}
            </div>
            </div>
        );
        })}
      </main>
    </div>
  );
}
