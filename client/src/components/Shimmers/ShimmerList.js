import React from "react";
import "./ShimmerList.css";

const ShimmerList = () => {
  return (
    <div className="shimmer-container">
      {[...Array(6)].map((_, index) => (
        <div className="shimmer-list">
          <div className="shimmer-row"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerList;
