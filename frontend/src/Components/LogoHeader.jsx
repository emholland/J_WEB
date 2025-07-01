import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LogoHeader.css';

export default function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="top-nav">
        <div className="nav-inner">
          <nav className="nav-menu">
            <div className="nav-left">
              <div className="works-trigger">
                <span className="nav-label" onClick={toggleDropdown}>WORKS</span>
              </div>

            </div>

            <span className="logo" onClick={() => { closeDropdown(); navigate('/'); }}>M.</span>

            <div className="nav-right">
              <span className="nav-label" onClick={() => { closeDropdown(); navigate('/author'); }}>FOUNDERS</span>
            </div>
          </nav>
        </div>
      </header>

      <div className="dropdown-bar-menu-container">
        <div className="dropdown-bar-menu-border">
            {isDropdownOpen && (
                <div className="dropdown-bar-menu">
                <span onClick={() => { closeDropdown(); navigate('/articles'); }}>articles</span>
                <span onClick={() => { closeDropdown(); navigate('/book-reviews'); }}>book reviews</span>
                </div>
            )}
        </div>
      </div>

    </>
  );
}
