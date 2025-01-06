// NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <Link style={{cursor: "pointer"}} to="/" className="back-home-btn">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
