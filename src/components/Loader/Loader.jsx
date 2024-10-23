import React from "react";
import { RingLoader } from "react-spinners";
import "../Loader/Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <RingLoader color="#20B2AA" size={150} loading={loading} />
    </div>
  );
};

export default Loader;
