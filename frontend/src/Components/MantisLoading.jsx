const MantisLoading = () => {
  return (
    <div className="mantis-loading-wrapper">
      <img
        src="/mantis.png"
        alt="Loading mantis"
        className="mantis-spinner"
      />
      <p className="mantis-loading-text">Loading...</p>
    </div>
  );
};

export default MantisLoading;
