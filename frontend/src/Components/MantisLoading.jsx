import mantisLogo from '../assets/mantisLogo.png';
import './MantisLoading.css';

const MantisLoading = () => {
  return (
    <div className="mantis-loading-wrapper">
      <img
        src={mantisLogo}
        alt="Loading mantis"
        className="mantis-spinner"
      />
      <p className="mantis-loading-text">Loading...</p>
    </div>
  );
};

export default MantisLoading;
