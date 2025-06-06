import './Author.css';
import authorImage from '../assets/author.png'; // Replace with actual path
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../Components/LogoHeader';

export default function AuthorInfo() {
  const navigate = useNavigate();

  return (
    <div className="author-page">
      <LogoHeader />
      <main className="author-main">
        <div className="author-left">
          <div className="author-image-frame">
            <img src={authorImage} alt="Josephine Mayer" className="author-photo" />
          </div>
        </div>
        <div className="author-right">
          <h1 className="author-name">JOSEPHINE MAYER</h1>
          <p className="author-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin laoreet commodo. Praesent at malesuada velit, ac imperdiet odio. Maecenas a sem et justo ullamcorper pellentesque sed quis sapien. Vivamus porta eros ut tellus tincidunt euismod. Proin ornare vulputate sapien, in rutrum risus tempus pretium. Pellentesque sed erat sed nisl ullamcorper porttitor sit amet in dolor. Nulla facilisi.
          </p>
          <div className="author-links">
            <a href="https://www.linkedin.com/in/josephinemayer/">LINKEDIN</a>
            <a href="mailto:ajosephinemayer@gmail.com">ajosephinemayer@gmail.com</a>

          </div>
        </div>
      </main>
    </div>
  );
}
