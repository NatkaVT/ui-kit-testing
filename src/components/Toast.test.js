import { render, screen, fireEvent } from '@testing-library/react';
import Toast from './Toast';

describe('Toast Component', () => {
  test('renders Toast correctly', () => {
    render(<Toast message="This is a toast message!" isVisible={true} />);
    const toastElement = screen.getByText(/this is a toast message!/i);
    expect(toastElement).toBeInTheDocument();
  });

  test('can be manually closed', () => {
    const { rerender } = render(<Toast message="This is a toast message!" isVisible={true} />);
    const toastElement = screen.getByText(/this is a toast message!/i);
    expect(toastElement).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    rerender(<Toast message="Close me" isVisible={false} />);
    expect(toastElement).not.toBeInTheDocument();
  });

  test('does not display when isVisible is false', () => {
    render(<Toast message="This is a toast message!" isVisible={false} />);
    const toastElement = screen.queryByText(/this is a toast message!/i);
    expect(toastElement).not.toBeInTheDocument();
  });

});
