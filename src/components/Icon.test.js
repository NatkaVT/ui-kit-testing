import { render, screen } from '@testing-library/react';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

describe('Icon Component', () => {
  test('renders Icon correctly', () => {
    render(<Icon icon={faEyeSlash} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('handles different sizes correctly', () => {
    render(<Icon name={faEyeSlash} size="lg" />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toHaveClass('lg');
  });
});
