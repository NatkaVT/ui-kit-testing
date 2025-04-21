import { fireEvent, render, screen } from '@testing-library/react';
import Inputs from './Inputs';

describe('Inputs Component', () => {
  test('renders username input correctly', () => {
    render(<Inputs />);
    const inputElement = screen.getByTestId('username');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders password input correctly', ()=> {
    render(<Inputs/>);
    const passwordInputElement = screen.getByTestId('password');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('displays error message when username is empty', () => {
    render(<Inputs nameError="Username is required" />);
    const inputElement = screen.getByTestId('username');
    fireEvent.change(inputElement, { target: { value: ''} });
    const errorMessage = screen.getByText(/username is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message when password is empty', () => {
    render(<Inputs passwordError="Password is required" />);
    const passwordInputElement = screen.getByTestId('password');
    fireEvent.change(passwordInputElement, { target: { value: '' } });
    const errorMessage = screen.getByText(/password is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('username input accepts text input', () => {
    render(<Inputs />);
    const inputElement = screen.getByTestId('username');
    fireEvent.change(inputElement, { target: { value: 'testuser' } });
    expect(inputElement.value).toBe('testuser');
  });

  test('password input accepts text input', () => {
    render(<Inputs />);
    const passwordInputElement = screen.getByTestId('password');
    fireEvent.change(passwordInputElement, { target: { value: 'testpassword' } });
    expect(passwordInputElement.value).toBe('testpassword');
  });

  test('toggles password visibility when eye icon is clicked', () => {
    render(<Inputs />);
    const passwordInputElement = screen.getByTestId('password');
    const eyeIcon = screen.getByRole('show');
    expect(passwordInputElement).toHaveAttribute('type', 'password');
    fireEvent.click(eyeIcon);
    expect(passwordInputElement).toHaveAttribute('type', 'text');
    fireEvent.click(eyeIcon);
    expect(passwordInputElement).toHaveAttribute('type', 'password');
  });

  test('input is disabled when disabled prop is true', () => {
    render(<Inputs disabled={true} />);
    const inputElement = screen.getByTestId('username');
    const passwordInputElement = screen.getByTestId('password');
    expect(inputElement).toBeDisabled();
    expect(passwordInputElement).toBeDisabled();
  });
});
