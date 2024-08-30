import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Message.css';

const Message = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/compose-message');
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">Message</h1>
      </div>
      <div className="card--container">
        <div className="card" onClick={handleCardClick}>
          <div className="card--cover">
            <span className="card-icon">👨‍🏫</span>
          </div>
          <div className="card--title">
            <h2>Mentor</h2>
          </div>
        </div>
        <div className="card" onClick={handleCardClick}>
          <div className="card--cover">
            <span className="card-icon">👩‍🏫</span>
          </div>
          <div className="card--title">
            <h2>Class Teacher</h2>
          </div>
        </div>
        <div className="card" onClick={handleCardClick}>
          <div className="card--cover">
            <span className="card-icon">👨‍🎓</span>
          </div>
          <div className="card--title">
            <h2>HOD</h2>
          </div>
        </div>
        <div className="card" onClick={handleCardClick}>
          <div className="card--cover">
            <span className="card-icon">👩‍🎓</span>
          </div>
          <div className="card--title">
            <h2>Principal</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
