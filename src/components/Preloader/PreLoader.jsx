import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <svg viewBox="0 0 1320 300">
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="animate-stroke"
          style={{ fontWeight: "bold" }}
        >
          rentalog
        </text>
      </svg>
    </div>
  );
};

export default Preloader;
