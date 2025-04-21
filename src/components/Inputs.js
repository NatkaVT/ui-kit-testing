import React, { useState } from "react";
import styles from './Inputs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faRegularEye } from '@fortawesome/free-solid-svg-icons'

const Inputs = ({
    name: initialName = '', 
    password: initialPassword = '',
    nameError: initialNameError = '',
    passwordError: initialPasswordError = '',
    disabled = false,
    active = false
}) => {
    const [name, setName] = useState(initialName);
    const [password, setPassword] = useState(initialPassword);
    const [nameError, setNameError] = useState(initialNameError);
    const [passwordError, setPasswordError] = useState(initialPasswordError);
    const [showPassword, setShowPassword] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value === '') {
            setNameError('Username is required');
        } else {
            setNameError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value === '') {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <label>Username*</label>
                <div className={styles.inputArea}>
                <input
                    type="text"
                    value={name === '' ? '' : name}
                    onChange={handleNameChange}
                    disabled={disabled}
                    placeholder="Enter your username"
                    className={`${styles.input} ${active ? styles.active : ''} ${nameError ? styles.error : ''} `}
                    data-testid='username'
                />
                </div>
                {nameError && <span className={styles.errorMessage}>{nameError}</span>}
            </div>

            <div className={styles.inputContainer}>
                <label>Password*</label>
                <div className={styles.inputArea}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        className={`${styles.input} ${active ? styles.active : ''} ${passwordError ? styles.error : ''} `}
                        disabled={disabled}
                        data-testid='password'
                    />
                    <span className={styles.iconEye} onClick={disabled ? null : handleShowPassword} role="show"><FontAwesomeIcon icon={faRegularEye} /></span>
                </div>
                {passwordError && <span className={styles.errorMessage}>{passwordError}</span>}
            </div>
        </div>
    );
};

export default Inputs;
