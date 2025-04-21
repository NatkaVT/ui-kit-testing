import { render, screen, fireEvent } from '@testing-library/react';
import Link from './Link';

describe('Link Component', () => {
  
  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.location = { assign: () => {} };
  });

  test('renders Link correctly', () => {
    render(<Link href="https://example.com">Link</Link>);
    const linkElement = screen.getByText(/link/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  test('Link navigates to the correct URL when clicked', () => {
    render(<Link href="https://example.com">Link</Link>);
    const linkElement = screen.getByText(/link/i);
    fireEvent.click(linkElement);
    expect(window.location.assign).toHaveBeenCalledWith('https://example.com');
  });

  test('Link is disabled when disabled prop is true', () => {
    render(<Link href="https://example.com" disabled={true}>Link</Link>);
    const linkElement = screen.getByText(/link/i);
    expect(linkElement).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(linkElement);
    expect(window.location.assign).not.toHaveBeenCalled();
  });

});
