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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin laoreet commodo. Praesent at malesuada velit, ac imperdiet odio. Maecenas a sem et justo ullamcorper pellentesque sed quis sapien.
Vivamus porta eros ut tellus tincidunt euismod. Proin ornare vulputate sapien, in rutrum risus tempus pretium. Pellentesque sed erat sed nisl ullamcorper porttitor sit amet in dolor. Nulla facilisi.
Proin turpis odio, mattis aliquam arcu in, dapibus varius sapien. Morbi accumsan tellus ut lobortis commodo. Vestibulum non enim porttitor, molestie leo sit amet, fringilla erat. Nulla vulputate egestas mattis. Suspendisse sollicitudin aliquam nunc, eget venenatis ex accumsan eget. Nunc tempus aliquam dui et finibus.
          </p>
        </div>
      </section>

      <SubscribeBox />

    </div>
  );
}
