import './Articles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
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

    // Handle tag filtering
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
      <header className="articles-header">
        <h1 className="site-title">BOLD TITLE</h1>
        <nav className="nav-links">
          <span onClick={() => navigate('/')}>Home</span>
          <span onClick={() => navigate('/authorinfo')}>Author Info</span>
          <span onClick={() => navigate('/resources')}>Resources</span>
        </nav>
      </header>

      <div className="page-name">
        <h1 className="site-title">Articles</h1>
      </div>

      {/* Tag filter buttons */}
      <div className="tag-filter">
        <p>Filter by tag:</p>
        <div className="tag-buttons">
          {tags.map(tag => (
            <button
              key={tag.id}
              className={`tag-button ${tag.id === activeTag ? 'active' : ''}`}
              onClick={() => handleFilter(tag.id)}
            >
              {tag.name}
            </button>
          ))}
          <button

              className={`clear-tag-button`}
              onClick={() => handleFilter(activeTag)}
            >
              clear
            </button>
        </div>
      </div>

      <main className="articles-container">
        {filteredArticles.map(article => (
          <div key={article.id} className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-content">{article.content}</p>
            <div className="tag-list">
              {article.tags.map(tag => (
                <span key={tag.id} className="tag">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
