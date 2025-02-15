import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const renderFooter = () => {
    return (
      <footer className="footer">
        <p>&copy; 2025 Restaurant Menu App. All rights reserved. </p>
      </footer>
    );
  };

  return <>{renderFooter()}</>;
};

export default Footer;
