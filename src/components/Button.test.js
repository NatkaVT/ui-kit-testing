import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders Button correctly', () => {
    render(<Button>Button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const buttonElement = screen.getByText(/button/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as disabled when disabled prop is passed', () => {
    render(<Button disabled>Button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeDisabled();
  });

});
