import { useNavigate } from 'react-router-dom';
import './LogoHeader.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="top-nav">
      <div className="nav-inner">
        <nav className="nav-menu">
            <div className="nav-left">
                <span onClick={() => navigate('/works')}>WORKS</span>
                <span onClick={() => navigate('/resources')}>RESOURCES</span>
            </div>
            <span className="logo" onClick={() => navigate('/')}>M.</span>
            <div className="nav-right">
                <span onClick={() => navigate('/contact')}>CONTACT</span>
                <span onClick={() => navigate('/author')}>AUTHOR</span>
            </div>
        </nav>
      </div>
    </header>
  );
}
