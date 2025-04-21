import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ options = ['Day', 'Week'], defaultOption, hoverOption, isOpen, hoverState, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption || null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen || false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
            }
    };

    useEffect(() => {
        if(selectedOption && onSelect){
            onSelect(selectedOption);
        }
    }, [selectedOption, onSelect]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button 
                onClick={toggleDropdown}
                className={`${isDropdownOpen ? styles.active : ''} ${selectedOption ? styles.selected : ''} ${hoverState ? styles.hover : ''} `}
                role='button'>
                {selectedOption || options[1]}
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {(isDropdownOpen || isOpen) && (
                <ul className={styles.menu} role='list'>
                    {options.map(option => (
                        <li key={option} 
                            onClick={() => handleOptionClick(option)} 
                            className={selectedOption === option ? styles.selected : (hoverOption === option ? styles.hover : '')}
                            role='option'>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
