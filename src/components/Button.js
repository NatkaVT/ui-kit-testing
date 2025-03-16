import React from 'react';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Button = ({
  children, 
  variant, 
  onClick,
  disabled,
  icon,
  hover = false,
  pressed = false
}) => {
  const className = `${styles.button} ${styles[variant]} ${hover ? styles.hover : ''} ${pressed ? styles.pressed : ''}`;

  return (
    <button 
      className={className} 
      onClick={onClick} 
      disabled={disabled}
    >
      {icon === 'play' && <FontAwesomeIcon icon={faPlay} />}
      {children}
    </button>
  );
};

export default Button;
