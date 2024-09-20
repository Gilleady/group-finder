import React from 'react';
import './Button.css';

const Button = ({ text, onClick, ...props }) => {

  return (
    <button className="button" onClick={(event) => {
        event.preventDefault();
        onClick();
      }}>
      {text}
    </button>
  );
};

export default Button;