import React from "react";
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalTitle}>
                <h2>{title}</h2>
                <button className={styles.closeButton} onClick={onClose} aria-label="close">
                    <FontAwesomeIcon icon={faX} size="xs"/>
                </button>
            </div>
            <div className={styles.modalContent}>
                <p>{content}</p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Modal;
