import React from 'react';

const PersonItem = ({ person }) => {
  return (
    <li className="person-item">
      <span className="person-icon">👤</span>
      <span className="person-name">{person}</span>
    </li>
  );
};

export default PersonItem;