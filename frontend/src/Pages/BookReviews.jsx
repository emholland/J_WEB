import './BookReviews.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookReviewHighlights from '../Components/BookReviewHighlight.jsx';
import LogoHeader from '../Components/LogoHeader';
import { apiUrl } from '../api.js';



export default function BookReviews() {
  const [bookReviews, setBookReviews] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [highlights, setHighlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl('/api/book-reviews/highlights/'))
      .then(res => res.json())
      .then(data => setHighlights(data))
      .catch(err => console.error('Error fetching highlights:', err));

    fetch(apiUrl('/api/book-reviews/'))
      .then(res => res.json())
      .then(data => {
        setBookReviews(data);
      })
      .catch(err => console.error('Error fetching book reviews:', err));

  }, []);

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
