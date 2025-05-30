import './HomeT.css';
import { useNavigate } from 'react-router-dom';
import armImage from '../assets/Arm.png'; // adjust path as needed


export default function HomeT() {
  const navigate = useNavigate();

  return (
    <div className="homepage">

      <div className="header">
        <div className='home-logo'>M.</div>
        <nav className="top-nav">
          
          <span onClick={() => navigate('/articles')}>WORKS</span>
          <span onClick={() => navigate('/contact')}>CONTACT</span>
        </nav>
      </div>


      <div className="main-content">
        <div className="title-block">
          <p className="intro-text">Hi, this is</p>
          <h1 className="bull-title">MANTIS REVIEW</h1>
        </div>        
        <div className="mid-section">
          <div className="red-box">
            <div className="tagline">
              <p>Contemporary op-eds & think pieces
              for the curious mind</p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
