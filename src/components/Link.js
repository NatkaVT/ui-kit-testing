import React from "react";
import styles from './Link.module.css';

const Link = ({ href, children, disabled, hover = false, pressed = false }) => {
    const handleClick = (event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        window.location.assign(href);
      };
    return (
        <a href={href} className={`${styles.link} ${disabled ? styles.disabled : ''} ${hover ? styles.hover : ''} ${pressed ? styles.pressed : ''}`}
        onClick={handleClick}
        aria-disabled={disabled ? 'true' : 'false'}>
            {children}
        </a>
    );
};

export default Link;
