import React from "react";
import styles from './Checkbox.module.css';

const Checkbox = ({ checked, onChange, label }) => {
    const id = label ? label.replace(/\s+/g, '-').toLowerCase() : undefined;

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
        </div>
    );

};

export default Checkbox;
