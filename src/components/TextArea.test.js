import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea Component', () => {
  test('renders TextArea correctly', () => {
    render(<TextArea placeholder="Type here..." />);
    const textAreaElement = screen.getByPlaceholderText(/type here.../i);
    expect(textAreaElement).toBeInTheDocument();
  });

  test('handles input correctly', () => {
    render(<TextArea placeholder="Type here..." />);
    const textAreaElement = screen.getByPlaceholderText(/type here.../i);
    fireEvent.change(textAreaElement, { target: { value: 'Hello' } });
    expect(textAreaElement.value).toBe('Hello');
  });

  test('calls onChange handler when text is entered', () => {
    const handleChange = jest.fn();
    render(<TextArea placeholder="Type here..." onChange={handleChange} />);
    const textAreaElement = screen.getByPlaceholderText(/type here.../i);
    fireEvent.change(textAreaElement, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

});
