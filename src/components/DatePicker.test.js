import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePickerEl from './DatePicker';

jest.mock('react-day-picker', () => ({
    DayPicker: jest.fn(({ onDayClick, selected }) => (
        <div data-testid="mock-day-picker" onClick={() => onDayClick(new Date())}>
            <div className="day" data-testid="day" />
        </div>
    )),
}));

describe('DatePickerEl', () => {
    test('should select a date', () => {
        render(<DatePickerEl />);
        const datePicker = screen.getByTestId('mock-day-picker');
        fireEvent.click(datePicker.querySelector('.day'));
        expect(screen.getByText(new Date().toLocaleDateString())).toBeInTheDocument();
    });

    test('should initialize with the correct date', () => {
        const initialDate = new Date(2023, 0, 1);
        render(<DatePickerEl initialDate={initialDate} />);
        expect(screen.getByText(initialDate.toLocaleDateString())).toBeInTheDocument();
    });

    test('should change the selected date', () => {
        const onDateChange = jest.fn();
        render(<DatePickerEl onDateChange={onDateChange} />);
        const datePicker = screen.getByTestId('mock-day-picker');
        fireEvent.click(datePicker.querySelector('.day'));
        expect(onDateChange).toHaveBeenCalledWith(new Date());
    });
});
