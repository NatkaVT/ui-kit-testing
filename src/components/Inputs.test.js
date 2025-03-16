import { fireEvent, render, screen } from '@testing-library/react';
import Inputs from './Inputs';

describe('Inputs Component', () => {
  test('renders username input correctly', () => {
    render(<Inputs placeholder="Enter your username" type="name" />);
    const inputElement = screen.getByPlaceholderText(/enter your username/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders password input correctly', ()=> {
    render(<Inputs placeholder="Enter your password" type="password" />);
    const passwordInputElement = screen.getByPlaceholderText(/enter your password/i);
    expect(passwordInputElement).toHaveAttribute('type', 'password');
  });

  test('displays error message when username is empty', () =>{
    render(<Inputs placeholder="Enter your username" type="name" nameError="Username is required" />);
    const inputElement = screen.getByPlaceholderText(/enter your username/i);
    fireEvent.change(inputElement, { target: { value: ''} });
    const errorMessage = screen.getByText(/username is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password is empty', () => {
    render(<Inputs placeholder="Enter your password" type="password" passwordError="Password is required" />);
    const passwordInputElement = screen.getByPlaceholderText(/enter your password/i);
    fireEvent.change(passwordInputElement, { target: { value: '' } });
    const errorMessage = screen.getByText(/password is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('toggles password visibility when eye icon is clicked', () => {
    render(<Inputs placeholder="Enter your password"/>);
    const passwordInputElement = screen.getByPlaceholderText(/enter your password/i);
    const eyeIcon = screen.getByRole('show');
    expect(passwordInputElement).toHaveAttribute('type', 'password');
    fireEvent.click(eyeIcon);
    expect(passwordInputElement).toHaveAttribute('type', 'text');
    fireEvent.click(eyeIcon);
    expect(passwordInputElement).toHaveAttribute('type', 'password');
  });

  test('input is disabled when disabled prop is true', () => {
    render(<Inputs disabled={true} />);
    const inputElement = screen.getByPlaceholderText(/enter your username/i);
    const passwordInputElement = screen.getByPlaceholderText(/enter your password/i);
    expect(inputElement).toBeDisabled();
    expect(passwordInputElement).toBeDisabled();
  });
});
