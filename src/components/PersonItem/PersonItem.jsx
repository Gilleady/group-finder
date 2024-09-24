import React from 'react';
import './PersonItem.css'

const PersonItem = ({ person }) => {
  return (
    <li className="person-item">
      <span className="person-icon">👤</span>
      <span className="person-name">{person}</span>
    </li>
  );
};

export default PersonItem;