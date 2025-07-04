// ArticlePage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';
import LogoHeader from '../Components/LogoHeader'; // Assuming you have a LogoHeader component
import SubscribeBox from '../Components/SubscribeBox';
import { apiUrl } from '../api.js'; 
import MantisLoading from '../Components/MantisLoading';

export default function ArticlePage() {
  const { id } = useParams(); // from route like /articles/:id
  const [article, setArticle] = useState(null);

const formatTextToParagraphs = (text) => {
  return text
    .split(/\r?\n\s*\r?\n/) // handles both \n\n and \r\n\r\n
    .map((paragraph, idx) => (
      <p key={idx} style={{ marginBottom: '1.5em', lineHeight: '1.6' }}>
        {paragraph.trim()}
      </p>
    ));
};



  useEffect(() => {
  fetch(apiUrl(`/api/articles/${id}/`))
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch article ${id}`);
      return res.json();
    })
    .then(data => setArticle(data))
    .catch(err => console.error('Error loading article:', err));
}, [id]);

  if (!article) return <MantisLoading />;

  return (
    <div className="article-detail-page">
        <LogoHeader />
        <div className="articlepage-article">
      {article.picture && (
        <img src={article.picture} alt={article.title} className="articlepage-image" />
      )}
      <div className="article-header-row">
        <div className="article-title-author">
          <h1 className="articlepage-title">{article.title}</h1>
          <div className="articlepage-author">By {article.author}</div>
        </div>
        <div className="articlepage-tag-list">
          {article.tags.map(tag => (
            <span key={tag.id} className="tag">{tag.name}</span>
          ))}
        </div>
      </div>

      <div className="articlepage-content">  {formatTextToParagraphs(article.content)}</div>
      
      </div>
    </div>
  );
}
