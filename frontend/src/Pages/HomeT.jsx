import './HomeT.css';
import { useNavigate } from 'react-router-dom';
import mantisLogo from '../assets/mantisLogo.png'; // use this in place of "moth.png"
import LogoHeader from '../Components/LogoHeader'; // Assuming you have a LogoHeader component
import SubscribeBox from '../Components/SubscribeBox';
import dots from '../assets/dots.png'; // Assuming you have a dots background image
import FullMantis from '../assets/FullMantis.png'; // Assuming you have a full mantis image

export default function HomeT() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      
    <LogoHeader />
     <main className="main-hero">
      <div className="hero-border">
        <div className="mantis-header">
          <h1 className="mantis-title">MANTIS<br />REVIEW</h1>
        </div>

        <div className="tagline-box">
          <div className="tagline-text">
            <p>
              CONTEMPORARY OP-EDS &<br />
              THINK PIECES FOR<br />
              THE CURIOUS MIND
            </p>

          </div>
          <div className="mantis-image-wrapper">
            <img src={mantisLogo} alt="mantis illustration" className="mantis-image" />
          </div>
        </div>
        </div>
      </main>


      <div className="scrolling-text-wrapper">
        <div className="scrolling-text-background" style={{
          backgroundImage: `url(${dots})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '101% 79%',
          backgroundPosition: 'center',
        }} >
        
        <div className="scrolling-text">
          <span>EVERYONE HAS THE RIGHT TO FREEDOM OF OPINION AND EXPRESSION...</span>
        </div>
        </div>
      </div>

      <section className="about-section">
        <div className="about-left-wrapper">
          <div className="about-left">
            <h2 className="about-title">ABOUT</h2>
            <div className="full-mantis-wrapper">

            </div>
          </div>
        </div>

        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin laoreet commodo. Praesent at malesuada velit, ac imperdiet odio. Maecenas a sem et justo ullamcorper pellentesque sed quis sapien.
Vivamus porta eros ut tellus tincidunt euismod. Proin ornare vulputate sapien, in rutrum risus tempus pretium. Pellentesque sed erat sed nisl ullamcorper porttitor sit amet in dolor. Nulla facilisi.
Proin turpis odio, mattis aliquam arcu in, dapibus varius sapien. Morbi accumsan tellus ut lobortis commodo. Vestibulum non enim porttitor, molestie leo sit amet, fringilla erat. Nulla vulputate egestas mattis. Suspendisse sollicitudin aliquam nunc, eget venenatis ex accumsan eget. Nunc tempus aliquam dui et finibus.
          </p>
        </div>
      </section>

      {/*<SubscribeBox />*/}

    </div>
  );
}
