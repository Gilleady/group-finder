import React from 'react';
import './Button.css';

const Button = ({ text, type, onClick, ...props }) => {

  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;