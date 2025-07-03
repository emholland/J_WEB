// BookReviewPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css'; // reuse same styles unless you want separate styles
import LogoHeader from '../Components/LogoHeader';
import MantisLoading from '../Components/MantisLoading';
import { apiUrl } from '../api';

export default function BookReviewPage() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  const formatTextToParagraphs = (text) => {
    return text
      .split(/\r?\n\s*\r?\n/)
      .map((paragraph, idx) => (
        <p key={idx} style={{ marginBottom: '1.5em', lineHeight: '1.6' }}>
          {paragraph.trim()}
        </p>
      ));
  };

  useEffect(() => {
    fetch(apiUrl(`/api/book-reviews/${id}/`))
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch book review ${id}`);
        return res.json();
      })
      .then(data => setReview(data))
      .catch(err => console.error('Error loading review:', err));
  }, [id]);

  if (!review) return <MantisLoading />;

  return (
    <div className="article-detail-page">
      <LogoHeader />
      <div className="articlepage-article">
        {review.picture && (
          <img
            src={review.picture}
            alt={review.title}
            className="articlepage-image"
          />
        )}
        <div className="article-header-row">
          <div className="article-title-author">
            <h1 className="articlepage-title">{review.title}</h1>
            <div className="articlepage-author">{review.author}</div>
          </div>
          <div className="articlepage-tag-list">
            {review.tags?.map(tag => (
              <span key={tag.id} className="tag">{tag.name}</span>
            ))}
          </div>
        </div>

        <div className="articlepage-content">
          {formatTextToParagraphs(review.content)}
        </div>
      </div>
    </div>
  );
}
