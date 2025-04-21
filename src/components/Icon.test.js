import { fireEvent, render, screen } from '@testing-library/react';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

describe('Icon Component', () => {
  test('renders Icon correctly', () => {
    render(<Icon icon={faEyeSlash} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('handles different sizes correctly', () => {
    render(<Icon icon={faEyeSlash} size="lg" />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toHaveClass('lg');
  });

  test('applies custom color correctly', () => {
    const customColor = 'red';
    render(<Icon icon={faEyeSlash} color={customColor} />);
    const iconElement = screen.getByTestId('icon').querySelector('svg');
    expect(iconElement).toHaveStyle(`color: ${customColor}`);
  });

  test('calls onClick handler clicked', () => {
    const onClick = jest.fn();
    render(<Icon icon={faEyeSlash} onClick={onClick} />);
    const iconElement = screen.getByTestId('icon');
    fireEvent.click(iconElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
