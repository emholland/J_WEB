import './BookReviews.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookReviewHighlights from '../Components/BookReviewHighlight.jsx';
import LogoHeader from '../Components/LogoHeader';
import { apiUrl } from '../api.js';
import MantisLoading from '../Components/MantisLoading.jsx';
import { getCache, setCache } from '../storage.js';



export default function BookReviews() {
  const [bookReviews, setBookReviews] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


    useEffect(() => {
    const fetchAllData = async () => {
      try {
        const cachedReviews = getCache('bookReviews');
        const cachedHighlights = getCache('bookHighlights');

        if (cachedReviews && cachedHighlights) {
          setBookReviews(cachedReviews);
          setHighlights(cachedHighlights);
          setLoading(false);
          return;
        }

        const [highlightsRes, reviewsRes] = await Promise.all([
          fetch(apiUrl('/api/book-reviews/highlights/')),
          fetch(apiUrl('/api/book-reviews/'))
        ]);

        const [highlightsData, reviewsData] = await Promise.all([
          highlightsRes.json(),
          reviewsRes.json()
        ]);

        setBookReviews(reviewsData);
        setHighlights(highlightsData);

        // Cache for 15 minutes
        setCache('bookReviews', reviewsData, 15);
        setCache('bookHighlights', highlightsData, 15);
      } catch (err) {
        console.error('Error fetching book review data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <MantisLoading />;


  return (
    <div className="articles-page">
      <LogoHeader />

      {/* Highlighted Articles Section */}
      <BookReviewHighlights reviews={highlights} gridTitle="HIGHLIGHTS" />



      {/* General Articles Section */}
      <div className="articles-header">
        <div className="page-name">
          <h1 className="article-page-title">Book Reviews</h1>
        </div>
    </div>

      <main className="articles-container">
        {bookReviews.map(bookReview=> (
          <div key={bookReview.id} className="article-card" onClick={() => navigate(`/book-reviews/${bookReview.id}`)}>
           <div className="side-by-side">
              {bookReview.picture && (
                  <img src={bookReview.picture} alt={bookReview.title} className="article-image" />
              )}
              <div className="article-info">
                <h2 className="article-title">{bookReview.title}</h2>
                <p className="article-content">{bookReview.description}</p>
            </div>
              </div>
            </div>
        ))}
      </main>
    </div>
  );
}
