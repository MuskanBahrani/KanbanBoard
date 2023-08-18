import React from 'react';
import './Card.css';

const Card = ({ task }) => {
  return (
    <div className="card">
      {task.title}
    </div>
  );
};

export default Card;



