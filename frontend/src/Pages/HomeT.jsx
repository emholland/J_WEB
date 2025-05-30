import './HomeT.css';
import { useNavigate } from 'react-router-dom';
import armImage from '../assets/Arm.png'; // adjust path as needed


export default function HomeT() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <nav className="top-nav">
        <span onClick={() => navigate('/articles')}>ARTICLES</span>
        <span onClick={() => navigate('/works')}>WORKS</span>
        <span onClick={() => navigate('/socials')}>SOCIALS</span>
        <span onClick={() => navigate('/contact')}>CONTACT</span>
      </nav>

<div className="main-wrapper">
      <div className="main-content">
        <p className="intro-text">Hi, this is</p>
        <h1 className="bull-title">MANTIS REVIEW</h1>

        <div className="mid-section">
          <div className='plus-tagline'>
            <div className="full-text">
              <div className="red-box">
                <img src={armImage} alt="Arm" className="arm-image" />
                <div className="real-text-block">
                  <p className="real-text">REAL</p>
                  <p className="real-text">REAL</p>
                </div>
              </div>

              

              <div className="right-side">
                <p className="real-text right-text">NEWS</p>
                <p className="real-text right-text">ANALYSIS</p>
              </div>
            </div>
            <div className="tagline">
              <p>Op-eds and book reviews for the curious mind.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
