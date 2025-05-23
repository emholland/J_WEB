import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <nav className="top-nav">
        <span onClick={() => navigate('/articles')}>ARTICLES</span>
        <span onClick={() => navigate('/works')}>WORKS</span>
        <span onClick={() => navigate('/socials')}>SOCIALS</span>
        <span onClick={() => navigate('/contact')}>CONTACT</span>
      </nav>

      <div className="main-content">
        <p className="intro-text">Hi, this is</p>
        <h1 className="bull-title">BULL REVIEW</h1>

        <div className='mid-section'>
          <div className='red-box'></div>
          <div className="text-block">
            <img src={"./assets/Arm.jpg"} alt="Arm" className="arm-photo" />
              <p className="real-text">REAL NEWS</p>
              <p className="real-text">REAL ANALYSIS</p>
              <div className="tagline">
                <p>Op-eds and book reviews for the curious mind.</p>
              </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
