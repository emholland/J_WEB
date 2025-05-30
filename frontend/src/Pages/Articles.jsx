import './Articles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HamburgerNav from '../Components/HamburgerNav';
import ArticleGrid from '../Components/ArticleGrid';



export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [highlights, setHighlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setFilteredArticles(data);

        // Extract highlighted articles by tag name
        const highlighted = data.filter(article =>
          article.tags.some(tag => tag.name.toLowerCase() === 'highlight')
        );
        setHighlights(highlighted);
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
      <HamburgerNav />

      {/* Highlighted Articles Section */}
     <ArticleGrid articles={highlights} gridTitle="Highlighted Articles" />


      {/* General Articles Section */}
      <div className="page-name">
        <h1 className="site-title">Articles</h1>
      </div>

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
            className="clear-tag-button"
            onClick={() => handleFilter(activeTag)}
          >
            clear
          </button>
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
                <p className="article-content">{article.description}</p>
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
