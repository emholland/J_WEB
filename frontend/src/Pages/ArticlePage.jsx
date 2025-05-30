// ArticlePage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Articles.css';
import HamburgerNav from '../Components/HamburgerNav';

export default function ArticlePage() {
  const { id } = useParams(); // from route like /articles/:id
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/articles/${id}/`)
      .then(res => res.json())
      .then(data => setArticle(data))
      .catch(err => console.error('Error loading article:', err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article-detail-page">
        <HamburgerNav />
      {article.picture && (
        <img src={article.picture} alt={article.title} className="article-image" />
      )}
      <h1 className="article-title">{article.title}</h1>
      <p className="article-content">{article.content}</p>
      <div className="tag-list">
        {article.tags.map(tag => (
          <span key={tag.id} className="tag">{tag.name}</span>
        ))}
      </div>
    </div>
  );
}
