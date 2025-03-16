import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  test('renders Checkbox correctly', () => {
    render(<Checkbox label="Text" />);
    const checkboxElement = screen.getByText(/text/i);
    expect(checkboxElement).toBeInTheDocument();
  });

  test('Checkbox can be checked and unchecked', () => {
    render(<Checkbox label="Text" />);
    const checkboxElement = screen.getByLabelText(/text/i);
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });

  test('Checkbox calls onChange handler when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Text" onChange={handleChange} />);
    const checkboxElement = screen.getByLabelText(/text/i);
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
