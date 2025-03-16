import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  test('renders Modal correctly', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="Modal Title" content="Modal Content" />);
    const modalElement = screen.getByText(/modal content/i);
    expect(modalElement).toBeInTheDocument();
  });

  test('closes Modal when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose} title="Modal Title" content="Modal Content" />);
    const closeButton = screen.getByRole('button', {name: /close/i});
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not render Modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}} title="Modal Title" content="Modal Content" />);
    const modalElement = screen.queryByText(/modal content/i);
    expect(modalElement).not.toBeInTheDocument();
  });

});
