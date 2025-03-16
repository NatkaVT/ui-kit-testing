import { render, screen } from '@testing-library/react';
import React from 'react';
import DatePickerEl from './DatePicker';

describe('DatePicker Component', () => {
  test('renders DatePicker correctly', () => {
    render(<DatePickerEl />);
    const datePickerElement = screen.getByTestId('date-picker');
    expect(datePickerElement).toBeInTheDocument();
  });
});
