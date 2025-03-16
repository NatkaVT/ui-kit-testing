import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ options = ['Day', 'Week'], defaultOption, hoverOption, isOpen, hoverState }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption || null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen || false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.dropdown}>
            <button 
                onClick={toggleDropdown}
                className={`${isDropdownOpen ? styles.active : ''} ${selectedOption ? styles.selected : ''} ${hoverState ? styles.hover : ''} `}
                role='button'>
                {selectedOption || options[1]}
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {(isDropdownOpen || isOpen) && (
                <ul className={styles.menu}>
                    {options.map(option => (
                        <li key={option} 
                            onClick={() => handleOptionClick(option)} 
                            className={selectedOption === option ? styles.selected : (hoverOption === option ? styles.hover : '')}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
