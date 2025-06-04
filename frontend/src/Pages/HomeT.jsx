import './HomeT.css';
import { useNavigate } from 'react-router-dom';
import armImage from '../assets/Arm.png'; // use this in place of "moth.png"
import LogoHeader from '../Components/LogoHeader'; // Assuming you have a LogoHeader component
import SubscribeBox from '../Components/SubscribeBox';

export default function HomeT() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      
    <LogoHeader />
      <main className="main-hero">
        <h1 className="mantis-title">MANTIS REVIEW</h1>
        <div className="tagline-box">
          <div className="tagline-text">
            <p><strong>Contemporary</strong><br />op-eds &<br />think pieces<br />for the curious<br />mind.</p>
          </div>
          <img src={armImage} alt="moth illustration" className="moth-image" />
        </div>
      </main>

      <div className="scrolling-text-wrapper">
        <div className="scrolling-text">
          <span>REAL NEWS • REAL ANALYSIS • CURIOUS MINDS ONLY • </span>
        </div>
      </div>

      <section className="about-section">
        <div className="about-left">
          <h2 className="about-title">ABOUT</h2>
          <img src="/path-to-your-mantis-side.png" alt="mantis illustration" className="about-image" />
        </div>

        <div className="about-content">
          <p>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
            ETIAM SOLLICITUDIN LAOREET COMMODO. PRAESENT AT MALESUADA VELIT, AC IMPERDIET ODIO. MAECENAS A SEM ET JUSTO ULLAMC...
          </p>
        </div>
      </section>

      <SubscribeBox />

    </div>
  );
}
