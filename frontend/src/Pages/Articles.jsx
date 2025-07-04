import './Articles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleHighlights from '../Components/ArticleHighlights';
import LogoHeader from '../Components/LogoHeader';
import { apiUrl } from '../api.js'; 
import MantisLoading from '../Components/MantisLoading';
import { getCache, setCache } from '../storage.js';



export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const cachedArticles = getCache('articles');
        const cachedHighlights = getCache('highlights');
        const cachedTags = getCache('tags');

        if (cachedArticles && cachedHighlights && cachedTags) {
          setArticles(cachedArticles);
          setFilteredArticles(cachedArticles);
          setHighlights(cachedHighlights);
          setTags(cachedTags);
          setLoading(false);
          return;
        }

        const [highlightsRes, articlesRes, tagsRes] = await Promise.all([
          fetch(apiUrl('/api/articles/highlights/')),
          fetch(apiUrl('/api/articles/')),
          fetch(apiUrl('/api/tags/'))
        ]);

        const [highlightsData, articlesData, tagsData] = await Promise.all([
          highlightsRes.json(),
          articlesRes.json(),
          tagsRes.json()
        ]);

        setHighlights(highlightsData);
        setArticles(articlesData);
        setFilteredArticles(articlesData);
        setTags(tagsData);

        // Cache for 15 minutes
        setCache('highlights', highlightsData, 15);
        setCache('articles', articlesData, 15);
        setCache('tags', tagsData, 15);
      } catch (err) {
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
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
  
if (loading) return <MantisLoading />;

  return (
    <div className="articles-page">
      <LogoHeader />

      {/* Highlighted Articles Section */}
     <ArticleHighlights articles={highlights} />


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
                <p className="highlight-author">By {article.author}</p>
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
