import './Articles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Highlights from '../Components/Highlights';
import LogoHeader from '../Components/LogoHeader';



export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [highlights, setHighlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/highlights/')
      .then(res => res.json())
      .then(data => setHighlights(data))
      .catch(err => console.error('Error fetching highlights:', err));
      
    fetch('http://127.0.0.1:8000/api/articles/')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch(err => console.error('Error fetching articles:', err));

    fetch('http://127.0.0.1:8000/api/tags/')
      .then(res => res.json())
      .then(data => setTags(data))
      .catch(err => console.error('Error fetching tags:', err));
  }, []);

  const handleFilter = (tagId) => {
    if (tagId === activeTag) {
      setFilteredArticles(articles);
      setActiveTag(null);
    } else {
      const filtered = articles.filter(article =>
        article.tags.some(tag => tag.id === tagId)
      );
      setFilteredArticles(filtered);
      setActiveTag(tagId);
    }
  };

  


  return (
    <div className="articles-page">
      <LogoHeader />

      {/* Highlighted Articles Section */}
     <Highlights articles={highlights} />


      {/* General Articles Section */}
      <div className="articles-header">
        <div className="page-name">
          <h1 className="article-page-title">Articles</h1>
        </div>

        <div className="tag-filter">
          <div className="tag-buttons-wrapper">
            <div className="tag-buttons-box">
              {tags.map(tag => (
                <button
                  key={tag.id}
                  className={`tag-button ${tag.id === activeTag ? 'active' : ''}`}
                  onClick={() => handleFilter(tag.id)}
                >
                  {tag.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
    </div>

      <main className="articles-container">
        {filteredArticles.map(article => (
          <div key={article.id} className="article-card" onClick={() => navigate(`/articles/${article.id}`)}>
           <div className="side-by-side">
              {article.picture && (
                  <img src={article.picture} alt={article.title} className="article-image" />
              )}
              <div className="article-info">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-content">
                  {article.description.length > 200
                    ? `${article.description.slice(0, 200)}...`
                    : article.description}
                </p>
                <div className="tag-list">
              {article.tags.map(tag => (
                <span key={tag.id} className="tag">{tag.name}</span>
              ))}
            </div>
              </div>
            </div>
            
          </div>
        ))}
      </main>
    </div>
  );
}
