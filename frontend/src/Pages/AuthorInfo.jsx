import './AuthorInfo.css';
import authorImage from '../assets/author.png'; // Replace with your image path
import { useNavigate } from 'react-router-dom';

export default function AuthorInfo() {

    const navigate = useNavigate();

  return (
    <div className="author-page">
      <header className="author-header">
        <h1 className="site-title">BOLD TITLE</h1>
        <nav className="nav-links">
          <span onClick={() => navigate('/')}>Home</span>
          <span onClick={() => navigate('/articles')}>Articles</span>
          <span onClick={() => navigate('/resources')}>Resources</span>
        </nav>
      </header>

      <main className="author-content">
        <div className='author-bar'>

            <div className='author-bar-content'>          
                <img src={authorImage} alt="Author" className="author-photo" />

                <section className="author-section">
                <h1 className="author-title">AUTHOR INFO</h1>
                <p>
                    I'm the creator of this blog — a writer, developer, and artist
                    committed to political storytelling and expressive design. This
                    space is built from scratch to reclaim narrative power through
                    technology and style.
                </p>
                </section>
            </div>  
        </div>
    
        <section className="author-section">
          <h2>Contact</h2>
          <p>Email: ajm@example.com</p>
          <p>Linkedin: @ajmmm</p>
        </section>

        <section className="author-section">
          <h2>Other Work</h2>
          <p>
            Coming soon: print zines, collaborative fiction, and open-source tools
            for digital creators.
          </p>
        </section>
      </main>
    </div>
  );
}
